import mongoose, { Schema } from "mongoose";
import { Movies } from "./Movie.Model";
import { Theater } from "./Theater.Model";

const MovieTimeSchema: Schema = new Schema({
  movieId: { type: mongoose.Types.ObjectId, ref: Movies, required: true },
  movSlot: {
    type: String,
    enum: {
      values: [
        "09:00:AM To 12:00:PM",
        "01:00:PM To 04:00:PM",
        "05:00:PM To 08:00:PM",
        "09:00:PM To 12:00:PM",
      ],
      message: "{VALUE} Is Not A Valid TimeSlot",
    },
  },
  releaseDate: { type: Date, required: true },
  theaterId: { type: mongoose.Types.ObjectId, ref: Theater, required: true },
  ticketPrice: { type: Number, required: true },
  totalSeats: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
});

const MovieTime = mongoose.model("movietimes", MovieTimeSchema);

export { MovieTime };
