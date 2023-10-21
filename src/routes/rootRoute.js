import express from "express";
import likeRoutes from "./likeRoutes.js";
import rateRoutes from "./rateRoutes.js";
import oderRoutes from "./oderroutes.js";
const rootRoute = express.Router();
rootRoute.use("/like", likeRoutes);
rootRoute.use("/rate", rateRoutes);
rootRoute.use("/oder", oderRoutes);
export default rootRoute;
