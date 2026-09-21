import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./dbConnect/db.js";
import router from "./router/router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/ping", (req, res) => {
  res.send("Server alive!");
});

const start = async () => {
  await dbConnect();
  app.listen(PORT, () => {
    console.log(`server is running at Port ${PORT}`);
  });
};

start();
