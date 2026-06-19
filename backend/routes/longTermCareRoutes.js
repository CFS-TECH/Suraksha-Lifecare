const express = require('express');
const router = express.Router();
const { createLongTermCareBooking, getLongTermCareBookings } = require('../controllers/longTermCareController');
const { longTermCare } = require('../middleware/validationMiddleware');

router.route('/')
  .post(longTermCare, createLongTermCareBooking)
  .get(getLongTermCareBookings);

module.exports = router;
