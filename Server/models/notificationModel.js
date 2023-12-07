const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  notificationContent: {
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

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;
