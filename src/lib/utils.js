import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
    try {
      if (connection.isConnected) {
        console.log("Using existing MongoDB connection.");
        return;
      }
  
      const db = await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      connection.isConnected = db.connections[0].readyState;
  
      console.log(`MongoDB connected: ${db.connections[0].host}`);
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw new Error("MongoDB connection failed.");
    }
  };
  