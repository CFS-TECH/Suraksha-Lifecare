const GeneralEnquiry = require('../models/GeneralEnquiry');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Submit a general enquiry
// @route   POST /api/enquiry
// @access  Public
const createGeneralEnquiry = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newEnquiry = await GeneralEnquiry.create({
      name,
      email,
      phone,
      subject,
      message
    });
    sendSuccess(res, 'General enquiry submitted successfully', newEnquiry, 201);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createGeneralEnquiry
};
