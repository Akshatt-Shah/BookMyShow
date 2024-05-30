import mongoose, { Schema } from "mongoose";
import { Users } from "../Models";

const theaterSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  OwnerId: { type: mongoose.Schema.ObjectId, ref: Users, required: true },
});

const Theater = mongoose.model("theateres", theaterSchema);
export { Theater };
