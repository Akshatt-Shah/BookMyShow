import { Router } from "express";
import { movieControllers } from "../Controllers";
import { VerifyToken } from "../Middlewares/VerifyToken";
const movieController = new movieControllers();
const MRoute = Router();
const Verify = new VerifyToken();

MRoute.post(
  "/movie/create-movie",
  Verify.VerifyDirector,
  movieController.createMovie
);

MRoute.get("/movie/get-movie", Verify.VerifyForAll, movieController.getMovie);

MRoute.put(
  "/movie/update-movie/:MovId",
  Verify.VerifyDirector,
  movieController.updateMovie
);
MRoute.delete(
  "/movie/delete-movie/:MovId",
  Verify.VerifyDirector,
  movieController.deleteMovie
);

export { MRoute };
