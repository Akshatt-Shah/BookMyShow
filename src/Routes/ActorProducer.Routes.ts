import { Router } from "express";
import { actorProducerControllers } from "../Controllers";
import { VerifyToken } from "../Middlewares/VerifyToken";
const Verify = new VerifyToken();
const actorProducerController = new actorProducerControllers();
const APRoute = Router();

APRoute.post(
  "/actor-producer/create",
  Verify.VerifySuperAdmin,
  actorProducerController.createActorProducer
);

APRoute.get("/actor-producer/get", actorProducerController.getActorProducer);

APRoute.put(
  "/actor-producer/update/:id",
  Verify.VerifySuperAdmin,
  actorProducerController.updateActorProducer
);

APRoute.delete(
  "/actor-producer/delete/:id",
  Verify.VerifySuperAdmin,
  actorProducerController.deleteActorProducer
);

export { APRoute };
