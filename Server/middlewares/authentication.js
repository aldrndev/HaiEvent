const { User } = require('../models');

const { verifyToken } = require('../helpers/jwt');

const authenticate = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw new Error('Unauthorized');
    }

    const verify = verifyToken(access_token);

    const checkUser = await User.findByPk(verify.id);

    if (!checkUser) {
      throw new Error('Unauthorized');
    }

    req.user = verify;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = authenticate;
