import dotenv from "dotenv";
import express from "express";
import { connectDb } from "./models";

// initialize configuration
dotenv.config();

const app = express();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
  res.send( "Hello world!" );
});

connectDb().then( () => {
  app.listen(process.env.PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${process.env.PORT}` );
  });
});
