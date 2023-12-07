const express = require('express');
const BuyerController = require('../controllers/buyerController');
const router = express.Router();

router.get('/explore', BuyerController.exploreEvent);
router.get('/event/detail/:id', BuyerController.eventDetail);
router.post('/transaction', BuyerController.addTransaction);
router.get('/event', BuyerController.showEvent);

module.exports = router;
