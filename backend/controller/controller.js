import mongoose from "mongoose";
import HoldingsModel from "../model/HoldingsModel.js";
import PositionsModel from "../model/PositionsModel.js";
import OrdersModel from "../model/OrdersModel.js";
import { User } from "../model/SignupModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const HoldingsModelController = async (req, res) => {
  try {
    const allHolding = await HoldingsModel.find({});
    res.json(allHolding);
  } catch (error) {
    res.status(500).json({ message: "Could not load holdings" });
  }
};

export const PositionsModelController = async (req, res) => {
  try {
    const allPosition = await PositionsModel.find({});
    res.json(allPosition);
  } catch (error) {
    res.status(500).json({ message: "Could not load positions" });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || qty < 1 || !price || price <= 0) {
      return res.status(400).json({ message: "Enter valid qty and price" });
    }

    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode: mode || "BUY",
      userId: req.user.id,
    });

    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Could not place order" });
  }
};

export const showOrder = async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Could not load orders" });
  }
};

export const registerUser = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: "Database not connected. Try again." });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password min 6 chars" });
    }

    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashPass,
    });

    return res.json({ message: "User Registered" });
  } catch (error) {
    return res.status(500).json({ message: "Signup failed" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Login success",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Login failed" });
  }
};
