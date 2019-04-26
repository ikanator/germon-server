import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose from 'mongoose';

import router from './routes/index';

class App {
  public app: Application;
  public mongoUrl: string;

  constructor() {
    this.app = express();
    this.config();

    // Setup application router
    this.app.use('/api', router);

    // Setup MongoDB connection
    this.mongoSetup();
  }

  private config(): void {
    // Setup dotenv variables
    dotenv.config();

    // Setup body parser
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));

    this.mongoUrl = process.env.MONGO_URL;
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
  }
}

export default new App().app;
