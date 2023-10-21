import express from "express";
import {
  dislikeOrLike,
  getListLikeByResId,
  getListLikeByUserId,
} from "../controllers/likeController.js";
const likeRoutes = express.Router();

likeRoutes.get("/get-list-like-userId/:userId", getListLikeByUserId);
likeRoutes.get("/get-list-like-resId/:resId", getListLikeByResId);
likeRoutes.post("/like-dislike", dislikeOrLike);

export default likeRoutes;
