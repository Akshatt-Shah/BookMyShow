import { Theater } from "../Models";
import { Router } from "express";
import { theaterControllers } from "../Controllers";
import { VerifyToken } from "../Middlewares/VerifyToken";
const theaterController = new theaterControllers();
const TRoute = Router();
const Verify = new VerifyToken();

TRoute.post(
  "/theater/create-Theater",
  Verify.VerifyTheaterAdmin,
  theaterController.createTheater
);

TRoute.get(
  "/theater/get-Theater",
  Verify.VerifyForAll,
  theaterController.getTheater
);

TRoute.put(
  "/theater/update-Theater/:TheaterId",
  Verify.VerifyForAll,
  theaterController.updateTheater
);

TRoute.delete(
  "/theater/delete-Theater/:TheaterId",
  Verify.VerifyForAll,
  theaterController.deleteTheater
);

export { TRoute };
