import mongoose from "mongoose";

// Set up default mongoose connection
const connectDb = () => {
    return mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
};

export { connectDb };
