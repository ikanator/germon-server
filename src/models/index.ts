import mongoose from 'mongoose';

import Article from './article';

// Set up default mongoose connection
const connectDb = () => {
    return mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
};

const models = { Article };

export { connectDb };
export default models;
