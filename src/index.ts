import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import * as environment from './config/environment';

// initialize configuration
dotenv.config({ path: '.env' });
environment.init();

const app = express();

// connect to DB
// tslint:disable-next-line:no-empty
environment.connectDb().then(() => { });

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(helmet());

// define a route handler for the default home page
app.get( '/', ( req, res ) => {
  res.send( 'Hello world!');
});
