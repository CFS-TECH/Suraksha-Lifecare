require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Initialize Express App
const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// JSON Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
// Serve static uploads
app.use('/uploads', express.static(uploadsDir));

// Welcome Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Suraksha Life Care API',
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/long-term-care', require('./routes/longTermCareRoutes'));
app.use('/api/home-visit', require('./routes/homeVisitRoutes'));
app.use('/api/service-booking', require('./routes/serviceBookingRoutes'));
app.use('/api/whatsapp-booking', require('./routes/whatsAppBookingRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));
app.use('/api/job-application', require('./routes/jobApplicationRoutes'));
app.use('/api/search', require('./routes/searchQueryRoutes'));
app.use('/api/enquiry', require('./routes/generalEnquiryRoutes'));
app.use('/api/inquiries', require('./routes/inquiryRoutes'));

// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}

module.exports = app;
