const express = require('express');
const router = express.Router();
const { logSearchQuery } = require('../controllers/searchQueryController');
const { search } = require('../middleware/validationMiddleware');

router.route('/')
  .post(search, logSearchQuery);

module.exports = router;
