const express = require('express');
const router = express.Router();
const { createHomeVisitBooking, getHomeVisitBookings } = require('../controllers/homeVisitController');
const { homeVisit } = require('../middleware/validationMiddleware');

router.route('/')
  .post(homeVisit, createHomeVisitBooking)
  .get(getHomeVisitBookings);

module.exports = router;
