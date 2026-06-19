const NewsletterSubscription = require('../models/NewsletterSubscription');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
// @access  Public
const subscribeNewsletter = async (req, res, next) => {
  try {
    const { email } = req.body;
    
    // Check if email already exists
    let subscription = await NewsletterSubscription.findOne({ email });
    if (subscription) {
      if (subscription.status === 'active') {
        return res.status(400).json({
          success: false,
          message: 'Email is already subscribed',
          timestamp: new Date().toISOString()
        });
      } else {
        subscription.status = 'active';
        await subscription.save();
        return sendSuccess(res, 'Resubscribed to newsletter successfully', subscription, 200);
      }
    }

    subscription = await NewsletterSubscription.create({ email });
    sendSuccess(res, 'Subscribed to newsletter successfully', subscription, 201);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all newsletter subscriptions
// @route   GET /api/newsletter
// @access  Private/Admin
const getNewsletterSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await NewsletterSubscription.find().sort({ createdAt: -1 });
    sendSuccess(res, 'Newsletter subscriptions retrieved successfully', subscriptions, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  subscribeNewsletter,
  getNewsletterSubscriptions
};
