import express from "express";
import {
  addRate,
  getListRateByResId,
  getListRateByUserId,
} from "../controllers/rateController.js";

const rateRoutes = express.Router();
rateRoutes.post("/add-rate", addRate);
rateRoutes.get("/get-list-rate-userId/:userId", getListRateByUserId);
rateRoutes.get("/get-list-rate-resId/:resId", getListRateByResId);

export default rateRoutes;
