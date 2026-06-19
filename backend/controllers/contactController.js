const ContactEnquiry = require('../models/ContactEnquiry');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Create new contact enquiry
// @route   POST /api/contact
// @access  Public
const createContactEnquiry = async (req, res, next) => {
  try {
    const { name, email, phone, service, message } = req.body;
    const newEnquiry = await ContactEnquiry.create({ name, email, phone, service, message });
    sendSuccess(res, 'Contact enquiry submitted successfully', newEnquiry, 201);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact enquiries
// @route   GET /api/contact
// @access  Private/Admin
const getContactEnquiries = async (req, res, next) => {
  try {
    const enquiries = await ContactEnquiry.find().sort({ createdAt: -1 });
    sendSuccess(res, 'Contact enquiries retrieved successfully', enquiries, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createContactEnquiry,
  getContactEnquiries
};
