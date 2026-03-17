import express from "express";
const router = express.Router();
import {HoldingsModelController,PositionsModelController,createOrder,showOrder,registerUser,loginUser} from '../controller/controller.js'

router.get("/holding",HoldingsModelController)
router.get("/position",PositionsModelController)
router.post("/newOrder",createOrder)
router.get("/orders",showOrder)
router.post("/signup",registerUser)
router.post("/login",loginUser)

export default router;
