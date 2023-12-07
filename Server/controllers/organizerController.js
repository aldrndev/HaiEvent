const { Event, Ticket, Category, MyEvent } = require('../models');

class OrganizerController {
  static async addEvent(req, res, next) {
    try {
      const {
        startDate,
        endDate,
        startTime,
        endTime,
        eventName,
        category,
        ticketType1,
        ticketPrice1,
        ticketType2,
        ticketPrice2,
        ticketType3,
        ticketPrice3,
        address,
        country,
        province,
        city,
        postalCode,
        latitude,
        longitude,
        description,
        stock1,
        stock2,
        stock3,
      } = req.body;

      const imageUrl = req.file.path;

      const createEvent = await Event.create({
        imageUrl,
        startDate,
        endDate,
        startTime,
        endTime,
        eventName,
        category,
        address,
        country,
        province,
        city,
        postalCode,
        latitude,
        longitude,
        description,
      });

      const createTicket = await Ticket.create({
        type1: ticketType1,
        stock1,
        price1: ticketPrice1,
        type2: ticketType2,
        stock2,
        price2: ticketPrice2,
        type3: ticketType3,
        stock3,
        price3: ticketPrice3,
        EventId: createEvent.id,
      });

      const myEvent = await MyEvent.create({
        UserId: req.user.id,
        EventId: createEvent.id,
      });

      res.status(201).json({
        statusCode: 201,
        message: `Event ${createEvent.eventName} has been created`,
        data: {
          createEvent,
          createTicket,
          myEvent,
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async showTransaction(req, res, next) {}

  static async addTicket(req, res, next) {}

  static async showCategory(req, res, next) {
    try {
      const getCategory = await Category.findAll();

      if (getCategory.length === 0) {
        throw new Error('not_found_category');
      }

      res.status(200).json({
        statusCode: 200,
        message: `Show all category in database`,
        getCategory,
      });
    } catch (error) {
      next(error);
    }
  }

  static async addMyEvent(req, res, next) {}

  static async editStatus(req, res, next) {}
}

module.exports = OrganizerController;
