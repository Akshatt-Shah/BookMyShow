import { Router } from "express";
import { movieTimeController } from "../Controllers";
import { VerifyToken } from "../Middlewares/VerifyToken";
const movieTimeControllers = new movieTimeController();
const MTRoute = Router();
const Verify = new VerifyToken();

MTRoute.post(
  "/movietime/create-movietime",
  Verify.VerifyTheaterAdmin,
  movieTimeControllers.createMovieTime
);

MTRoute.get("/movietime/get-movietime", Verify.VerifyForAll, movieTimeControllers.getMovieTime);

MTRoute.put(
  "/movietime/update-movietime/:MovieTimeId",
  Verify.VerifyTheaterAdmin,
  movieTimeControllers.updateMovieTime
);
MTRoute.delete(
  "/movietime/delete-movietime/:MovieTimeId",
  Verify.VerifyTheaterAdmin,
  movieTimeControllers.deleteMovieTime
);

export { MTRoute };