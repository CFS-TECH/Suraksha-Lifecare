const express = require('express');
const router = express.Router();
const { createWhatsAppBooking } = require('../controllers/whatsAppBookingController');
const { whatsAppBooking } = require('../middleware/validationMiddleware');

router.route('/')
  .post(whatsAppBooking, createWhatsAppBooking);

module.exports = router;
