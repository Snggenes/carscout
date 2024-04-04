const express = require("express");
const router = express.Router();
const CarModel = require("../models/car");

router.post("/", async (req, res) => {
  try {
    const car = await CarModel.create(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

module.exports = router;
