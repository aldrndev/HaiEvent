const { Event, Ticket } = require('../models');

class BuyerController {
  static async exploreEvent(req, res, next) {}

  static async eventDetail(req, res, next) {
    try {
      const { id } = req.params;

      const checkEvent = await Event.findOne({
        where: {
          id,
        },
        include: Ticket,
      });

      res.status(200).json({
        statusCode: 200,
        message: 'Success get event detail',
        checkEvent,
      });
    } catch (error) {
      next(error);
    }
  }

  static async addTransaction(req, res, next) {}

  static async showEvent(req, res, next) {
    try {
      const getEvent = await Event.findAll({
        include: Ticket,
      });

      if (getEvent.length === 0) {
        throw new Error('not_event_found');
      }

      res.status(200).json({
        statusCode: 200,
        message: 'Get event succesfully',
        getEvent,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BuyerController;
