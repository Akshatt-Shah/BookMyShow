import { IMovie } from "../Interfaces";
import { NewRequest } from "../Middlewares/VerifyToken";
import { movieServices } from "../Services";
const movieService = new movieServices();
import { Request, Response } from "express";

export class movieControllers {
  async createMovie(req: NewRequest, res: Response) {
    try {
      let movie: IMovie = req.body;
      movie.Director = req.Id;
      const movieData = await movieService.createMovie(movie);
      res.status(200).json(movieData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async getMovie(req: NewRequest, res: Response) {
    try {
      const { Id, Role } = req;
      //   console.log(Id, Role);
      if (Role === "Director") {
        const movieData = await movieService.getMovie(Id, Role);
        res.status(200).json(movieData);
      } else {
        const movieData = await movieService.getMovie();
        res.status(200).json(movieData);
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async updateMovie(req: NewRequest, res: Response) {
    try {
      let Data: IMovie = req.body;
      Data.Director = req.Id;
      const { MovId } = req.params;
      const movieData = await movieService.updateMovie(MovId, Data);
      res.status(200).json(movieData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async deleteMovie(req: NewRequest, res: Response) {
    try {
      const { Id } = req;
      const { MovId } = req.params;
      const movieData = await movieService.deleteMovie(MovId, Id);
      res.status(200).json(movieData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
}
