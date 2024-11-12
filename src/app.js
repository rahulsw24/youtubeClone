import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //accepts json, limit defines the limit of data to be accepted
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //converts urlencoded data to be read, extended - object ke andar object
app.use(express.static("public")); // connects public folder, where images are stored
app.use(cookieParser()); //accepts and creataes user browser cookies

export { app };
