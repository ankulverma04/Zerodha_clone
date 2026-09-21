import express from "express";
import {
  HoldingsModelController,
  PositionsModelController,
  createOrder,
  showOrder,
  registerUser,
  loginUser,
} from "../controller/controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/holding", auth, HoldingsModelController);
router.get("/position", auth, PositionsModelController);
router.post("/newOrder", auth, createOrder);
router.get("/orders", auth, showOrder);
router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;
