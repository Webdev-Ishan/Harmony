import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
const port = process.env.PORT || 4000


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Running")
})


app.listen(port,()=>{
    console.log(`listenening on port ${port}`)
})