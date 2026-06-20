const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    global.dbConnected = true;
  } catch (error) {
    console.warn(`\n⚠️ Database Connection Error: ${error.message}`);
    console.warn('Attempting local MongoDB fallback (mongodb://127.0.0.1:27017/suraksha_lifecare)...');
    try {
      const conn = await mongoose.connect('mongodb://127.0.0.1:27017/suraksha_lifecare');
      console.log(`MongoDB Connected (Local Fallback): ${conn.connection.host}`);
      global.dbConnected = true;
    } catch (localError) {
      console.warn('⚠️ Local MongoDB also failed. Server running in MOCK DATABASE mode.');
      console.warn('Inquiries will be logged to console and mock-saved in memory.\n');
      global.dbConnected = false;
    }
  }
};

module.exports = connectDB;
