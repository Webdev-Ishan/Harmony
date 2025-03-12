import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./Src/routes/songRoute.js";
import connectToDb from "./Src/config/mongodb.js";
import connectCloudinary from "./Src/config/cloudnary.js";
import albumrouter from "./Src/routes/albumRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectToDb();
connectCloudinary();

app.use("/api/song", songRouter);
app.use("/api/album", albumrouter);

app.get("/", (req, res) => {
  res.send("Running");
});

app.listen(port, () => {
  console.log(`listenening on port ${port}`);
});
