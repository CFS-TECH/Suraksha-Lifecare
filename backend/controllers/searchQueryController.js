const SearchQuery = require('../models/SearchQuery');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Log a search query
// @route   POST /api/search
// @access  Public
const logSearchQuery = async (req, res, next) => {
  try {
    const { query, category } = req.body;
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];

    const newQueryLog = await SearchQuery.create({
      query,
      category: category || 'General',
      ipAddress,
      userAgent
    });

    sendSuccess(res, 'Search query logged successfully', newQueryLog, 201);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  logSearchQuery
};
