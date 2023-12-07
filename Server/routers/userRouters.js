const express = require('express');
const UserController = require('../controllers/userController');
const { isVerifiedUser } = require('../middlewares/authorization');
const parser = require('../config/cloudinary');
const loginLimiter = require('../helpers/rateLimit');
const router = express.Router();

router.post('/register', parser.single('imageUrl'), UserController.register);
router.get('/verify-email', UserController.verifyEmail);

router.post('/login', isVerifiedUser, loginLimiter, UserController.login);
router.post('/login-google', UserController.loginGoogle);
router.post('/login-facebook', UserController.loginFacebook);
router.post('/login-twitter', UserController.loginTwitter);

module.exports = router;
