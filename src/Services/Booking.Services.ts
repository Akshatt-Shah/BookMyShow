import { IBooking } from "../Interfaces";
import { Booking, MovieTime } from "../Models";
import { Msg } from "../utills";

export class BookingServices {
  async createBooking(Data: IBooking) {
    try {
      const movieTime: any = await MovieTime.findOne({ _id: Data.movTime });
      if (movieTime.availableSeats >= Data.nom_of_tickets) {
        const BookingData = await Booking.create(Data);
        movieTime.availableSeats =
          movieTime.availableSeats - Data.nom_of_tickets;
        await movieTime.save();
        return {
          Data: BookingData,
          message: Msg.createdata("Booking"),
          status: true,
        };
      } else {
        return {
          message:
            "Booking Is Full Please Choose Another Day Or Another Time-Slot ",
          status: false,
        };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }

  async getBooking(Id?: string, Role?: string) {
    try {
      console.log(Role);
      if (Role === "User") {
        const movieData = await Booking.find({ userId: Id });
        return {
          Data: movieData,
          message: Msg.Selectdata("Movie"),
          status: true,
        };
      } else if (Role === "Super-Admin" || Role === "Theater-Admin") {
        console.log("Role");
        const movieData = await Booking.find();
        return {
          Data: movieData,
          message: Msg.Selectdata("Movie"),
          status: true,
        };
      } else {
        return {
          message: "You Cannot Access This Page",
          status: true,
        };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }

  async deleteBooking(bookingId: string, Id?: string) {
    try {
      const movieData: any = await Booking.findOneAndDelete({
        userId: Id,
        _id: bookingId,
      });
      console.log(movieData);
      const BookingData: any = await MovieTime.findOne({
        _id: movieData.movTime,
      });
      BookingData.availableSeats =
        BookingData.availableSeats + movieData.nom_of_tickets;
      await BookingData.save();
      return {
        Data: movieData,
        message: Msg.Deletedata("Movie Booking"),
        status: true,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
}
