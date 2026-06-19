const JobApplication = require('../models/JobApplication');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Submit a job application
// @route   POST /api/job-application
// @access  Public
const submitJobApplication = async (req, res, next) => {
  try {
    const { fullName, email, phone, address, qualification, experience, resumeUrl, appliedPosition } = req.body;
    const newApplication = await JobApplication.create({
      fullName,
      email,
      phone,
      address,
      qualification,
      experience,
      resumeUrl,
      appliedPosition
    });
    sendSuccess(res, 'Job application submitted successfully', newApplication, 201);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all job applications
// @route   GET /api/job-application
// @access  Private/Admin
const getJobApplications = async (req, res, next) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    sendSuccess(res, 'Job applications retrieved successfully', applications, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitJobApplication,
  getJobApplications
};
