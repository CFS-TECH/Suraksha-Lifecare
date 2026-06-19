const HomeVisitBooking = require('../models/HomeVisitBooking');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Create new home visit booking
// @route   POST /api/home-visit
// @access  Public
const createHomeVisitBooking = async (req, res, next) => {
  try {
    const { patientName, phone, address, serviceRequired, preferredDate, preferredTime } = req.body;
    const newBooking = await HomeVisitBooking.create({
      patientName,
      phone,
      address,
      serviceRequired,
      preferredDate,
      preferredTime
    });
    sendSuccess(res, 'Home visit booking submitted successfully', newBooking, 201);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all home visit bookings
// @route   GET /api/home-visit
// @access  Private/Admin
const getHomeVisitBookings = async (req, res, next) => {
  try {
    const bookings = await HomeVisitBooking.find().sort({ createdAt: -1 });
    sendSuccess(res, 'Home visit bookings retrieved successfully', bookings, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHomeVisitBooking,
  getHomeVisitBookings
};
