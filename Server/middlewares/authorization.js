const { User } = require('../models');

const isVerifiedUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    const checkUser = await User.findOne({
      where: {
        email,
      },
    });

    if (!checkUser) {
      throw new Error('user_not_found');
    }

    if (checkUser.isVerified === false) {
      throw new Error('verified_false');
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isVerifiedUser,
};
