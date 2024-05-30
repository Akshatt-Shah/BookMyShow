import { Request, Response } from "express";
import { BookingServices } from "../Services";
import { IBooking } from "../Interfaces";
import { NewRequest } from "../Middlewares/VerifyToken";
const BookingService = new BookingServices();

export class BookingController {
  async createBooking(req: NewRequest, res: Response) {
    try {
      let Data: IBooking = req.body;
      Data.userId = req.Id;
      const BookingData = await BookingService.createBooking(Data);
      res.status(200).json(BookingData);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async getBooking(req: NewRequest, res: Response) {
    try {
      const { Id, Role } = req;
      console.log(Id, Role);
      if (Role === "User") {
        console.log("first");
        const movieData = await BookingService.getBooking(Id, Role);
        res.status(200).json(movieData);
      } else {
        console.log("Second");
        const movieData = await BookingService.getBooking(Id, Role);
        res.status(200).json(movieData);
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }

  async deleteBooking(req: NewRequest, res: Response) {
    try {
      const { Id } = req;
      const { bookingId } = req.params;
      const movieData = await BookingService.deleteBooking(bookingId, Id);
      res.status(200).json(movieData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
}
