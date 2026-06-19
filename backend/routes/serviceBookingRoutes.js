const express = require('express');
const router = express.Router();
const { createServiceBooking, getServiceBookings } = require('../controllers/serviceBookingController');
const { serviceBooking } = require('../middleware/validationMiddleware');

router.route('/')
  .post(serviceBooking, createServiceBooking)
  .get(getServiceBookings);

module.exports = router;
