
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";


export const ConnectToDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log(`DB is Connected Successfully!`);
    })
    .catch((error) => {
      console.log(`Error. : ${error}`);
    });
};