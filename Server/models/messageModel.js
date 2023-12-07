const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  senderId: {
    type: Number,
    required: true,
  },
  receiverId: {
    type: Number,
    required: true,
  },
  messageContent: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['read', 'unread'],
    default: 'unread',
  },
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
