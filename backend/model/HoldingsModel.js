import mongoose from "mongoose";
import HoldingsSchema from "../schemas/HoldingsSchema.js";

const HoldingsModel = mongoose.model("Holding", HoldingsSchema);

export default HoldingsModel;