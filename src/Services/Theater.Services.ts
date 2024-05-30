import { ITheater } from "../Interfaces";
import { Theater } from "../Models";
import { Msg } from "../utills";

export class TheaterServices {
  async createTheater(Data: ITheater) {
    try {
      const theaterData = await Theater.create(Data);
      return {
        Data: theaterData,
        message: Msg.createdata("Theater"),
        status: true,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }

  async getTheater(Id?: string, Role?: string) {
    try {
      if (Role === "Theater-Admin") {
        const movieData = await Theater.find({ OwnerId: Id });
        return {
          Data: movieData,
          message: Msg.Selectdata("Theater"),
          status: true,
        };
      } else {
        const movieData = await Theater.find();
        return {
          Data: movieData,
          message: Msg.Selectdata("Theater"),
          status: true,
        };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }

  async updateTheater(TheaterId?: string, Data?: ITheater) {
    try {
      const theaterData = await Theater.findByIdAndUpdate(TheaterId, Data);
      return {
        Data: theaterData,
        message: Msg.Updatedata("Theater"),
        status: true,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }

  async deleteTheater(TheaterId: string, Id?: string) {
    try {
      const movieData = await Theater.findOneAndDelete({
        OwnerId: Id,
        _id: TheaterId,
      });
      return {
        Data: movieData,
        message: Msg.Deletedata("Theater"),
        status: true,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
}
