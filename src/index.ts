import dotenv from 'dotenv';
import express from 'express';
import * as environment from './config/environment';

// initialize configuration
dotenv.config({ path: '.env' });
environment.init();

const app = express();

// connect to DB
// tslint:disable-next-line:no-empty
environment.connectDb().then(() => { });

// define a route handler for the default home page
app.get( '/', ( req, res ) => {
  res.send( 'Hello world!');
});
