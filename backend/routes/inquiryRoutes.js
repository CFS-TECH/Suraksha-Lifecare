const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries } = require('../controllers/inquiryController');
const { inquiry } = require('../middleware/validationMiddleware');

router.route('/')
  .post(inquiry, createInquiry)
  .get(getInquiries);

module.exports = router;
