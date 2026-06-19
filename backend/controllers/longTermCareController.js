const LongTermCareBooking = require('../models/LongTermCareBooking');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Create new long term care booking
// @route   POST /api/long-term-care
// @access  Public
const createLongTermCareBooking = async (req, res, next) => {
  try {
    const { patientName, careType, duration, phone, address, notes } = req.body;
    const newBooking = await LongTermCareBooking.create({
      patientName,
      careType,
      duration,
      phone,
      address,
      notes
    });
    sendSuccess(res, 'Long term care booking submitted successfully', newBooking, 201);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all long term care bookings
// @route   GET /api/long-term-care
// @access  Private/Admin
const getLongTermCareBookings = async (req, res, next) => {
  try {
    const bookings = await LongTermCareBooking.find().sort({ createdAt: -1 });
    sendSuccess(res, 'Long term care bookings retrieved successfully', bookings, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLongTermCareBooking,
  getLongTermCareBookings
};
