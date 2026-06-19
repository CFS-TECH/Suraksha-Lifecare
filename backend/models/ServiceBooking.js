const mongoose = require('mongoose');

const serviceBookingSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: [true, 'Patient Name is required'],
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  serviceName: {
    type: String,
    required: [true, 'Service Name is required'],
    trim: true
  },
  preferredDate: {
    type: Date,
    required: [true, 'Preferred Date is required']
  },
  preferredTime: {
    type: String,
    required: [true, 'Preferred Time is required'],
    trim: true
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ServiceBooking', serviceBookingSchema);
