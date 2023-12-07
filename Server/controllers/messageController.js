const { saveMessage, retrieveMessages } = require('../helpers/messageService');

class MessageController {
  static async sendMessage(req, res, next) {
    try {
      const { senderId, receiverId, content } = req.body;
      const message = {
        senderId,
        receiverId,
        messageContent: content, // perhatikan perubahan ini
        timestamp: new Date(),
        status: 'unread',
      };
      await saveMessage(message);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      next(error);
    }
  }

  static async getMessage(req, res, next) {
    try {
      const { userId } = req.params;
      const messages = await retrieveMessages(userId);
      res.status(200).json(messages);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MessageController;
