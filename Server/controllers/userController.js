const { checkPwd } = require('../helpers/bcrypt');
const { createToken, verifyToken } = require('../helpers/jwt');
const { User } = require('../models');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const nodemailer = require('nodemailer');

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const foundUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!foundUser) {
        throw new Error('user_not_found');
      }

      if (!checkPwd(password, foundUser.password)) {
        throw new Error('invalid_password');
      }

      //data yang di kirim
      const payload = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        username: foundUser.username,
        role: foundUser.role,
        isVerified: foundUser.isVerified,
        imageUrl: foundUser.imageUrl,
      };

      const token = createToken(payload);

      res.status(200).json({
        statusCode: 200,
        access_token: token,
        message: `User ${payload.name} logged in successfully`,
        user: payload,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async loginGoogle(req, res, next) {
    try {
      const { token } = req.body;

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
      });

      const payload = ticket.getPayload();

      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          imageUrl:
            'https://res.cloudinary.com/xmexi/image/upload/v1695835270/profilePicture/default-pp.png.png',
          name: payload.email.split('@')[0],
          email: payload.email,
          username: payload.email.split('@')[0],
          password: '123456',
          address: 'jakarta',
          phoneNumber: '081300000',
          role: 'buyer',
          isVerified: true,
        },
      });

      const customPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        role: user.role,
        isVerified: user.isVerified,
        imageUrl: user.imageUrl,
      };

      const getToken = createToken(customPayload);

      res.status(200).json({
        statusCode: 200,
        access_token: getToken,
        message: `User ${customPayload.username} logged in successfully`,
        user: customPayload,
      });
    } catch (error) {
      next(error);
    }
  }

  static async loginFacebook(req, res, next) {}

  static async loginTwitter(req, res, next) {}

  static async register(req, res, next) {
    try {
      const { name, email, username, password, address, phoneNumber, role } =
        req.body;

      const imageUrl = req.file.path;

      const register = await User.create({
        imageUrl,
        name,
        email,
        username,
        password,
        address,
        phoneNumber,
        role,
      });

      const payload = {
        id: register.id,
        name: register.name,
        email: register.email,
        username: register.username,
        isVerified: register.isVerified,
      };

      //verify token
      const token = createToken(payload);

      //send email confirmation

      const transporter = nodemailer.createTransport({
        host: process.env.HOST_EMAIL,
        port: 465,
        secure: true,
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.PASS_EMAIL,
        },
      });

      // const link = `https://haievent.web.app/verify-email?token=${token}`;
      const link = `http://localhost:5173/verify-email?token=${token}`;
      await transporter.sendMail({
        from: 'admin@temandonasi.my.id',
        to: register.email,
        subject: 'Verify your email address',
        html: `<p>Please verify your email address by clicking the following link: <a href="${link}">Here</a></p>`,
      });

      res.status(201).json({
        statusCode: 201,
        message: `Success register account ${register.name}. Please check your email to activate your account.`,
        data: register,
      });
    } catch (error) {
      next(error);
    }
  }

  static async verifyEmail(req, res, next) {
    try {
      const { token } = req.query;

      const verify = verifyToken(token);

      const verifyUser = await User.findByPk(verify.id);

      if (!verifyUser) {
        throw new Error('verify_not_found');
      }

      if (verifyUser.isVerified) {
        throw new Error('user_is_verified');
      }

      const updatedStatus = await User.update(
        {
          isVerified: true,
        },
        {
          where: {
            id: verifyUser.id,
          },
        }
      );

      const newStatus = await User.findByPk(verifyUser.id);

      res.status(200).json({
        statusCode: 200,
        message: `Email ${verify.email} has been verified, please login to continue`,
        newStatus,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
