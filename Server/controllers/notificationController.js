const NotificationModel = require('../models/notificationModel');

exports.saveNotification = async (data) => {
  try {
    const notification = new NotificationModel(data);
    await notification.save();
  } catch (error) {
    console.error('Error saving notification:', error);
  }
};
