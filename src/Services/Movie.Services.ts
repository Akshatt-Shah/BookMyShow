import { IMovie } from "../Interfaces";
import { Movies } from "../Models";
import { Msg } from "../utills";

export class movieServices {
  async createMovie(Data: IMovie) {
    try {
      const movieData = await Movies.create(Data);
      return {
        Data: movieData,
        message: Msg.createdata("Movie"),
        status: true,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async getMovie(Id?: string, Role?: string) {
    try {
      if (Role === "Director") {
        const movieData = await Movies.find({ Director: Id });
        return {
          Data: movieData,
          message: Msg.Selectdata("Movie"),
          status: true,
        };
      } else {
        const movieData = await Movies.find();
        return {
          Data: movieData,
          message: Msg.Selectdata("Movie"),
          status: true,
        };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async updateMovie(MovId?: string, Data?: IMovie) {
    try {
      const movieData = await Movies.findByIdAndUpdate(MovId, Data);
      return {
        Data: movieData,
        message: Msg.Updatedata("Movie"),
        status: true,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async deleteMovie(MovId: string, Id?: string) {
    try {
      const movieData = await Movies.findOneAndDelete({
        Director: Id,
        _id: MovId,
      });
      return {
        Data: movieData,
        message: Msg.Deletedata("Movie"),
        status: true,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
}
