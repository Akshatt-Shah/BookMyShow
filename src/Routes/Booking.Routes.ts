import { BookingController } from "../Controllers";
const BookingControllers = new BookingController();
import { Router } from "express";
import { VerifyToken } from "../Middlewares/VerifyToken";
const Verify = new VerifyToken();
const BRoute = Router();

BRoute.post(
  "/booking/create-Booking",
  Verify.VerifyUser,
  BookingControllers.createBooking
);

BRoute.get(
  "/booking/get-Booking",
  Verify.VerifyForAll,
  BookingControllers.getBooking
);

BRoute.delete(
  "/booking/delete-Booking/:bookingId",
  Verify.VerifyUser,
  BookingControllers.deleteBooking
);

export { BRoute };
