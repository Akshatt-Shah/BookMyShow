import { IMovieTime } from "../Interfaces";
import { MovieTime, Theater } from "../Models";
import { Msg } from "../utills";

export class MovieTimeServices {
  async createMovieTime(MovieTimeData: IMovieTime) {
    try {
      const finddata = await MovieTime.findOne({
        movSlot: MovieTimeData.movSlot,
        releaseDate: MovieTimeData.releaseDate,
      });
      if (finddata) {
        return { message: "Already Booked", status: false };
      } else {
        const Data = await MovieTime.create(MovieTimeData);
        return {
          Data: Data,
          message: Msg.createdata("MovieTime"),
          status: true,
        };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async getMovieTime(TheaterAdminId?: string, Role?: string) {
    try {
      let TheaterData;
      if (Role === "Theater-Admin") {
        TheaterData = await Theater.find({ OwnerId: TheaterAdminId });
      } else {
        TheaterData = await Theater.find();
      }
      const allId = TheaterData.map((item) => {
        return item._id;
      });
      const Data = await MovieTime.find({ theaterId: { $in: allId } });
      return { Data: Data, message: Msg.Selectdata("MovieTime"), status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async updateMovieTime(MovieTimeId: string, MovieTimeData: IMovieTime) {
    try {
      const Data = await MovieTime.findByIdAndUpdate(
        MovieTimeId,
        MovieTimeData
      );
      return { Data: Data, message: Msg.Updatedata("MovieTime"), status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async deleteMovieTime(MovieTimeId: string, Id?: string) {
    try {
      const theater = await Theater.find({ OwnerId: Id });
      if (theater.length > 0) {
        const Data = await MovieTime.findByIdAndDelete(MovieTimeId);
        return {
          Data: Data,
          message: Msg.Deletedata("MovieTime"),
          status: true,
        };
      } else {
        return { message: Msg.NotFounddata("Theater-Admin") };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
}
