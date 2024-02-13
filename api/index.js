import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.error(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("Server is runnning on port 3000");
});

app.get("/test", (req, res) => {
  res.json({ messege: "API is working" });
});
