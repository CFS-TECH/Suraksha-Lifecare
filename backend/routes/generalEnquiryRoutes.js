const express = require('express');
const router = express.Router();
const { createGeneralEnquiry } = require('../controllers/generalEnquiryController');
const { enquiry } = require('../middleware/validationMiddleware');

router.route('/')
  .post(enquiry, createGeneralEnquiry);

module.exports = router;
