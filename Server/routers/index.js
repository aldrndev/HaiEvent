const express = require('express');
const router = express.Router();
const userRouter = require('./userRouters');
const buyerRouter = require('./buyerRouters');
const organizerRouter = require('./organizerRouters');
const messageRouter = require('./messageRouter');
const authenticate = require('../middlewares/authentication');

router.use(userRouter);
router.use('/buyer', buyerRouter);

router.use(messageRouter);
router.use(authenticate);

router.use('/organizer', organizerRouter);

module.exports = router;
