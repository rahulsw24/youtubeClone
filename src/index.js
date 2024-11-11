// require("dotenv").config();
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";

dotenv.config({
  path: "./env",
});

connectDB();

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERR:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR", error);
//     throw error;
//   }
// })();
