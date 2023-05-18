import expressAsyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const logoutUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout user" });
});

const getUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "user profile" });
});

const updateUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
