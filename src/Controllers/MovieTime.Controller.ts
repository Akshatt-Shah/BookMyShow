import { IMovieTime } from "../Interfaces";
import { NewRequest } from "../Middlewares/VerifyToken";
import { MovieTimeServices } from "../Services";
import { Request, Response } from "express";
const MovieTimeService = new MovieTimeServices();

export class movieTimeController {
  async createMovieTime(req: Request, res: Response) {
    try {
      let Data: IMovieTime = req.body;
      Data.availableSeats = Data.totalSeats;
      const MovieTimeData = await MovieTimeService.createMovieTime(Data);
      res.status(200).json(MovieTimeData);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async getMovieTime(req: NewRequest, res: Response) {
    try {
      const { Id, Role } = req;
      const MovieTimeData = await MovieTimeService.getMovieTime(Id, Role);
      res.status(200).json(MovieTimeData);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async updateMovieTime(req: Request, res: Response) {
    try {
      let Data: IMovieTime = req.body;
      const { MovieTimeId } = req.params;
      const MovieTimeData = await MovieTimeService.updateMovieTime(
        MovieTimeId,
        Data
      );
      res.status(200).json(MovieTimeData);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async deleteMovieTime(req: NewRequest, res: Response) {
    try {
      const { MovieTimeId } = req.params;
      const { Id } = req;
      const MovieTimeData = await MovieTimeService.deleteMovieTime(MovieTimeId,Id);
      res.status(200).json(MovieTimeData);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}
