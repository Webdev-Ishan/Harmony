import { Addsong, Listsong } from "../controllers/song.Controller.js";
import express from "express";
import upload from "../middleware/multer.js";

const songRouter = express.Router();

songRouter.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  Addsong
);
songRouter.get("/list", Listsong);

export default songRouter;
