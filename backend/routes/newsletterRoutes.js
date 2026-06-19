const express = require('express');
const router = express.Router();
const { subscribeNewsletter, getNewsletterSubscriptions } = require('../controllers/newsletterController');
const { newsletter } = require('../middleware/validationMiddleware');

router.route('/')
  .post(newsletter, subscribeNewsletter)
  .get(getNewsletterSubscriptions);

module.exports = router;
