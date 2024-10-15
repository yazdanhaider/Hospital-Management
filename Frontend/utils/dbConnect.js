// utils/dbConnect.js
import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDB is already connected.");
        return;
    }

    try {
        const dbURI = import.meta.env.MONGODB_URI || 'mongodb://localhost:27017/hospitalusers/fitlifedatabase';
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error("MongoDB connection error:", e);
    }
};