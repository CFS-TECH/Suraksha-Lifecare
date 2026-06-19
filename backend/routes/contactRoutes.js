const express = require('express');
const router = express.Router();
const { createContactEnquiry, getContactEnquiries } = require('../controllers/contactController');
const { contact } = require('../middleware/validationMiddleware');

router.route('/')
  .post(contact, createContactEnquiry)
  .get(getContactEnquiries);

module.exports = router;
