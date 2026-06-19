const Inquiry = require('../models/Inquiry');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Submit an inquiry/booking
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res, next) => {
  try {
    const { name, phone, city, serviceType, address, purpose, message } = req.body;
    const newInquiry = await Inquiry.create({
      name,
      phone,
      city,
      serviceType,
      address,
      purpose,
      message
    });
    sendSuccess(res, 'Inquiry submitted successfully', newInquiry, 201);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
const getInquiries = async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    sendSuccess(res, 'Inquiries retrieved successfully', inquiries, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createInquiry,
  getInquiries
};
