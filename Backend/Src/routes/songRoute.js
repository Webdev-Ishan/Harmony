import { Addsong,Listsong } from "../controllers/song.Controller.js";
const express = require('express')

const songRouter = express.Router()

songRouter.post('/add',Addsong)
songRouter.get('/list',Listsong)


export default songRouter