import express from "express";
import { userOrder } from "../controllers/orderController.js";
const oderRoutes = express.Router();



oderRoutes.post("/user-order", userOrder);


export default oderRoutes;
