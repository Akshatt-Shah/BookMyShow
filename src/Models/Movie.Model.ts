import { IMovie } from "../Interfaces";
import mongoose, { Schema } from "mongoose";
import { ActorProducer } from "./ActorandDirector.Model";
import { Users } from "./User.Model";

const movieSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    rel_date: { type: Date, required: true },
    budget: { type: Number, required: true },
    collections: { type: Number, required: true },
    Director: {
      type: mongoose.Schema.ObjectId,
      ref: Users,
      required: true,
    },
    Actor: {
      type: mongoose.Schema.ObjectId,
      ref: ActorProducer,
      required: true,
    },
    Producer: {
      type: mongoose.Schema.ObjectId,
      ref: ActorProducer,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movies = mongoose.model("movies", movieSchema);
export { Movies };
