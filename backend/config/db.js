import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (uri && uri.trim() !== '') {
    try {
      console.log(`Connecting to configured MongoDB...`);
      const conn = await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 4000,
      });
      console.log(`✓ MongoDB Connected Successfully: ${conn.connection.host}`);
      return true;
    } catch (error) {
      console.warn(`! Could not connect to configured MONGODB_URI: ${error.message}`);
      console.warn(`  Falling back to persistent local storage (data_storage.json).`);
      return false;
    }
  }

  // If local MongoDB is running on default port 27017, try connecting quickly
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/samadhansetu', {
      serverSelectionTimeoutMS: 1500,
    });
    console.log(`✓ Local MongoDB Connected Successfully: ${conn.connection.host}`);
    return true;
  } catch (err) {
    console.log(`✓ Database Mode: Persistent Local Storage (backend/data_storage.json)`);
    console.log(`💡 To connect MongoDB Atlas (Free Cloud DB): paste your MONGODB_URI in backend/.env`);
    return false;
  }
};
