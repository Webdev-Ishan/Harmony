import mongoose from "mongoose";

const connectToDb = async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}/Harmony`).then(() => {
    console.log("Connected to mongodb");
  });
};

export default connectToDb;
