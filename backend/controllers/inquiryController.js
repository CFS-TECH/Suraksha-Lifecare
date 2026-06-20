const Inquiry = require('../models/Inquiry');
const { sendSuccess } = require('../utils/responseHandler');

const mockInquiries = [];

// @desc    Submit an inquiry/booking
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res, next) => {
  try {
    const { name, phone, city, serviceType, address, purpose, message } = req.body;
    
    if (!global.dbConnected) {
      const mockInquiry = {
        _id: new Date().getTime().toString(),
        name,
        phone,
        city,
        serviceType,
        address,
        purpose,
        message,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      mockInquiries.push(mockInquiry);
      console.log('\n📥 [OFFLINE MOCK DB] Inquiry received:');
      console.log(mockInquiry);
      console.log('');
      return sendSuccess(res, 'Inquiry mock-submitted successfully (Offline Mode)', mockInquiry, 201);
    }

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
    if (!global.dbConnected) {
      return sendSuccess(res, 'Inquiries retrieved from mock database (Offline Mode)', mockInquiries, 200);
    }
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
