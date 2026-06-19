const mongoose = require('mongoose');

const homeVisitBookingSchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  serviceRequired: {
    type: String,
    required: [true, 'Service Required is required'],
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
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('HomeVisitBooking', homeVisitBookingSchema);
