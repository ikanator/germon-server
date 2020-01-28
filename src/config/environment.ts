import mongoose from 'mongoose';
import {logger} from '../utils/logger';

export const init = () => {
    if (!process.env.MONGO_URL) {
        logger.error('No Mongo connection string. Set MONGO_URL environment variable.');
        process.exit(1);
    }
};

// Set up default mongoose connection
export const connectDb = () => {
    return mongoose.connect(process.env.MONGO_URL || '', {useNewUrlParser: true})
        .then(() => {/** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        })
        .catch((error) => {
            logger.error('MongoDB connection error. Please make sure MongoDB is running. ', error);
            process.exit(1);
        });
};
