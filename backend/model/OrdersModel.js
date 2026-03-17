import mongoose from "mongoose";
import OrdersSchema from "../schemas/OrdersSchema.js";

const OrdersModel = mongoose.model("Order", OrdersSchema);

export default OrdersModel;
