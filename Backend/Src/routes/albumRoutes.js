import {
  Addalbum, Listalbum, removelbum
  } from "../controllers/album.Controller.js";
  import express, { Router } from "express";
  import upload from "../middleware/multer.js";

  const albumrouter = express.Router()

  albumrouter.post('/add',upload.single("image"),Addalbum)
  albumrouter.get('/list',Listalbum)
  albumrouter.post('/remove',removelbum)

  export default albumrouter