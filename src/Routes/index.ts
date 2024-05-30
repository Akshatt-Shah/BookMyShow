import { URoute } from "./User.Routes";
import { APRoute } from "./ActorProducer.Routes";
import { MRoute } from "./Movie.Routes";
import { TRoute } from "./Theater.Routes";
import { MTRoute } from "./MovieTime.Routes";
import { BRoute } from "./Booking.Routes";
import express from "express";
import { Router } from "express";
const route = Router();

route.use(URoute);
route.use(APRoute);
route.use(MRoute);
route.use(TRoute);
route.use(MTRoute);
route.use(BRoute);

export { route };
