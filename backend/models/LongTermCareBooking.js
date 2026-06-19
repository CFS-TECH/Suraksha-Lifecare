const mongoose = require('mongoose');

const longTermCareBookingSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: [true, 'Patient Name is required'],
    trim: true
  },
  careType: {
    type: String,
    required: [true, 'Care Type is required'],
    trim: true
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('LongTermCareBooking', longTermCareBookingSchema);
