const mongoose = require('mongoose');

const whatsAppBookingSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  sourcePage: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('WhatsAppBooking', whatsAppBookingSchema);
