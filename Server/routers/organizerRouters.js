const express = require('express');
const OrganizerController = require('../controllers/organizerController');
const parser = require('../config/cloudinary');
const router = express.Router();

router.post(
  '/add-event',
  parser.single('imageUrl'),
  OrganizerController.addEvent
);
router.get('/transaction', OrganizerController.showTransaction);
router.post('/ticket', OrganizerController.addTicket);
router.get('/category', OrganizerController.showCategory);
router.post('/myevent', OrganizerController.addMyEvent);
router.patch('/myevent/:id', OrganizerController.editStatus);

module.exports = router;
