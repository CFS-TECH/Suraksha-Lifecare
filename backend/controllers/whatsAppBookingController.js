const WhatsAppBooking = require('../models/WhatsAppBooking');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Create new WhatsApp booking log
// @route   POST /api/whatsapp-booking
// @access  Public
const createWhatsAppBooking = async (req, res, next) => {
  try {
    const { name, phone, message, sourcePage } = req.body;
    const newBooking = await WhatsAppBooking.create({
      name,
      phone,
      message,
      sourcePage
    });
    sendSuccess(res, 'WhatsApp booking registered successfully', newBooking, 201);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWhatsAppBooking
};
