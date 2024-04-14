const express = require("express");
const router = express.Router();
const CarModel = require("../models/car");
const NodeCache = require("node-cache");

const cache = new NodeCache();

router.post("/", async (req, res) => {
  try {
    const newCar = new CarModel(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  const cachedCars = cache.get("cars");
   
  if (cachedCars) {
    return res.status(200).json(cachedCars);
  }

  const { id } = req.query;

  if (id) {
    try {
      const car = await CarModel.findById(id);
      return res.status(200).json(car);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  try {
    const cars = await CarModel.find();
    cache.set("cars", cars, 180);

    res.status(200).json(cars);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
