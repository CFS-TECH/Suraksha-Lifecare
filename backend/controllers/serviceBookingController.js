const ServiceBooking = require('../models/ServiceBooking');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Create new service booking
// @route   POST /api/service-booking
// @access  Public
const createServiceBooking = async (req, res, next) => {
  try {
    const { patientName, phone, email, serviceName, preferredDate, preferredTime, notes } = req.body;
    const newBooking = await ServiceBooking.create({
      patientName,
      phone,
      email,
      serviceName,
      preferredDate,
      preferredTime,
      notes
    });
    sendSuccess(res, 'Service booking submitted successfully', newBooking, 201);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all service bookings
// @route   GET /api/service-booking
// @access  Private/Admin
const getServiceBookings = async (req, res, next) => {
  try {
    const bookings = await ServiceBooking.find().sort({ createdAt: -1 });
    sendSuccess(res, 'Service bookings retrieved successfully', bookings, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createServiceBooking,
  getServiceBookings
};
