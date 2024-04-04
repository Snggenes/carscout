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
});

router.get("/", async (req, res) => {
  const { id } = req.query;

  if (id) {
    try {
      const car = await CarModel.findById(id);
      return res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }}

  try {
    const cars = await CarModel.find();

    res.status(200).json(cars);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
