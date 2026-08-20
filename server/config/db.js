const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/become_ai_smart';
    const conn = await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 2000 });
    console.log('MongoDB Connected: ' + conn.connection.host);
    return true;
  } catch (error) {
    console.warn('MongoDB notice: ' + error.message + '. Running in In-Memory / Seed mode.');
    return false;
  }
};
module.exports = connectDB;
