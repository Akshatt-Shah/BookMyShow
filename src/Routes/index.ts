import { URoute } from "./User.Routes";
import { APRoute } from "./ActorProducer.Routes";
import express from "express";
import { Router } from "express";
const route = Router();

route.use(URoute);
route.use(APRoute);

export { route };
