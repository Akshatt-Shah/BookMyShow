import { ITheater } from "../Interfaces";
import { Request, Response } from "express";
import { TheaterServices } from "../Services";
const TheaterService = new TheaterServices();
import { NewRequest } from "../Middlewares/VerifyToken";

export class theaterControllers {
  async createTheater(req: NewRequest, res: Response) {
    try {
      let theater: ITheater = req.body;
      theater.OwnerId = req.Id;
      const movieData = await TheaterService.createTheater(theater);
      res.status(200).json(movieData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async getTheater(req: NewRequest, res: Response) {
    try {
      const { Id, Role } = req;
      //   console.log(Id, Role);
      if (Role === "Theater-Admin") {
        const movieData = await TheaterService.getTheater(Id, Role);
        res.status(200).json(movieData);
      } else {
        const movieData = await TheaterService.getTheater();
        res.status(200).json(movieData);
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async updateTheater(req: NewRequest, res: Response) {
    try {
      let Data: ITheater = req.body;
      Data.OwnerId = req.Id;
      const { TheaterId } = req.params;
      const theaterData = await TheaterService.updateTheater(TheaterId, Data);
      res.status(200).json(theaterData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }

  async deleteTheater(req: NewRequest, res: Response) {
    try {
      const { Id } = req;
      const { TheaterId } = req.params;
      const theaterData = await TheaterService.deleteTheater(TheaterId, Id);
      res.status(200).json(theaterData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
}
