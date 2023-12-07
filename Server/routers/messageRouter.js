const express = require('express');
const MessageController = require('../controllers/messageController');
const router = express.Router();

router.get('/message/:userId', MessageController.getMessage);
router.post('/message', MessageController.sendMessage);

module.exports = router;
