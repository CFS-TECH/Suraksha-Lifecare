const express = require('express');
const router = express.Router();
const { submitJobApplication, getJobApplications } = require('../controllers/jobApplicationController');
const { jobApplication } = require('../middleware/validationMiddleware');

router.route('/')
  .post(jobApplication, submitJobApplication)
  .get(getJobApplications);

module.exports = router;
