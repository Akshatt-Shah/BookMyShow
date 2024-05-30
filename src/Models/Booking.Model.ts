import mongoose, { Schema } from "mongoose";
import { Users } from "./User.Model";
import { MovieTime } from "./MovieTime.Model";

const BookingSchema: Schema = new Schema(
  {
    movTime: { type: mongoose.Schema.ObjectId, ref: MovieTime, required: true },
    userId: { type: mongoose.Schema.ObjectId, ref: Users, required: true },
    nom_of_tickets: { type: Number, required: true },
  },
  { timestamps: true }
);

const Booking = mongoose.model("bookings", BookingSchema);

export { Booking };
