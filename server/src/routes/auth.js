const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    try {
      await user.save();
      return res.status(201).json({ message: "User created" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    return res
      .cookie("auth", token, {
        httpOnly: true,
      })
      .json({ message: "Logged in" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/profile", async (req, res) => {
  try {
    const token = req.cookies.auth;
    if (!token) {
      return res.status(401).json(null);
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findOne({ email: payload.email });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
