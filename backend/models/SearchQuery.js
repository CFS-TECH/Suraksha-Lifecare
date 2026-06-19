const mongoose = require('mongoose');

const searchQuerySchema = new mongoose.Schema({
  query: {
    type: String,
    required: [true, 'Search query is required'],
    trim: true
  },
  category: {
    type: String,
    trim: true,
    default: 'General'
  },
  ipAddress: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('SearchQuery', searchQuerySchema);
