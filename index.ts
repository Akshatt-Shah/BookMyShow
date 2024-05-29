import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import config from "config";
import { route } from "./src/Routes";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(route);
function Start() {
  //   try {
  const PORT = config.get("PORT");
  const MONGOURL: string = config.get("MONGOURL");
  mongoose.connect(MONGOURL).then(() => {
    console.log("Mongo DB Connected..");
    app.listen(PORT, () => {
      console.log(`The Server Is Running On Port ${PORT}`);
    });
  });
}

Start();
