import { Addsong,Listsong } from "../controllers/song.Controller.js";
import  express from 'express'

const songRouter = express.Router()

songRouter.post('/add',Addsong)
songRouter.get('/list',Listsong)


export default songRouter