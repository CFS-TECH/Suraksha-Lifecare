// Regular expressions for validations
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

// Standard validator helper
const validateFields = (fields) => {
  return (req, res, next) => {
    const errors = [];
    const body = req.body;

    for (const [key, rule] of Object.entries(fields)) {
      const value = body[key];

      // Check required
      if (rule.required && (value === undefined || value === null || String(value).trim() === '')) {
        errors.push(`${rule.label || key} is required`);
        continue;
      }

      if (value !== undefined && value !== null && String(value).trim() !== '') {
        // Check email
        if (rule.type === 'email' && !emailRegex.test(value)) {
          errors.push(`Please provide a valid email address for ${rule.label || key}`);
        }
        // Check url
        if (rule.type === 'url' && !urlRegex.test(value)) {
          errors.push(`Please provide a valid URL for ${rule.label || key}`);
        }
        // Check date
        if (rule.type === 'date' && isNaN(Date.parse(value))) {
          errors.push(`Please provide a valid date for ${rule.label || key}`);
        }
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
        timestamp: new Date().toISOString()
      });
    }

    next();
  };
};

// Define specific validation schemas for each booking/form
const schemas = {
  contact: validateFields({
    name: { required: true, label: 'Name' },
    email: { required: true, type: 'email', label: 'Email' },
    phone: { required: true, label: 'Phone number' },
    service: { required: true, label: 'Service' },
    message: { required: true, label: 'Message' }
  }),

  longTermCare: validateFields({
    patientName: { required: true, label: 'Patient Name' },
    careType: { required: true, label: 'Care Type' },
    duration: { required: true, label: 'Duration' },
    phone: { required: true, label: 'Phone number' },
    address: { required: true, label: 'Address' }
  }),

  homeVisit: validateFields({
    patientName: { required: true, label: 'Patient Name' },
    phone: { required: true, label: 'Phone number' },
    address: { required: true, label: 'Address' },
    serviceRequired: { required: true, label: 'Service Required' },
    preferredDate: { required: true, type: 'date', label: 'Preferred Date' },
    preferredTime: { required: true, label: 'Preferred Time' }
  }),

  serviceBooking: validateFields({
    patientName: { required: true, label: 'Patient Name' },
    phone: { required: true, label: 'Phone number' },
    serviceName: { required: true, label: 'Service Name' },
    preferredDate: { required: true, type: 'date', label: 'Preferred Date' },
    preferredTime: { required: true, label: 'Preferred Time' }
  }),

  whatsAppBooking: validateFields({
    phone: { required: true, label: 'Phone number' }
  }),

  newsletter: validateFields({
    email: { required: true, type: 'email', label: 'Email' }
  }),

  jobApplication: validateFields({
    fullName: { required: true, label: 'Full Name' },
    email: { required: true, type: 'email', label: 'Email' },
    phone: { required: true, label: 'Phone number' },
    address: { required: true, label: 'Address' },
    qualification: { required: true, label: 'Qualification' },
    experience: { required: true, label: 'Experience' },
    resumeUrl: { required: true, type: 'url', label: 'Resume URL' },
    appliedPosition: { required: true, label: 'Applied Position' }
  }),

  search: validateFields({
    query: { required: true, label: 'Search query' }
  }),

  enquiry: validateFields({
    name: { required: true, label: 'Name' },
    email: { required: true, type: 'email', label: 'Email' },
    phone: { required: true, label: 'Phone number' },
    subject: { required: true, label: 'Subject' },
    message: { required: true, label: 'Message' }
  }),

  inquiry: validateFields({
    name: { required: true, label: 'Name' },
    phone: { required: true, label: 'Phone number' },
    city: { required: true, label: 'City' },
    serviceType: { required: true, label: 'Service Category' },
    address: { required: true, label: 'Current Address' },
    purpose: { required: false, label: 'Home Visit Purpose' }
  })
};

module.exports = schemas;
