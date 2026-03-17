import express from 'express'
import HoldingsModel from '../model/HoldingsModel.js'
import PositionsModel from '../model/PositionsModel.js'
import OrdersModel from '../model/OrdersModel.js'
import {User} from '../model/SignupModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const HoldingsModelController=async(req,res)=>{
    const allHolding=await HoldingsModel.find({})
    res.json(allHolding)
}

export const PositionsModelController=async(req,res)=>{
    const allPosition=await PositionsModel.find({})
    res.json(allPosition)
}

export const createOrder = async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
    // console.log(req.body)

  await newOrder.save();
  res.json(newOrder);
};

export const showOrder= async (req, res) => {
  const orders = await OrdersModel.find({})
  res.json(orders)
}

//Register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
// console.log(req.body);
    const isExist = await User.findOne({ email });
    if (isExist)
      return res.status(400).json({ message: "Email already exists" });

    const hashPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPass,
    });

    return res.json({ message: "User Registered", user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

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
    return res.status(500).json({ message: error.message });
  }
};