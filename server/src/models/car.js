const mongoose = require("mongoose");
const {
  carData,
  prices,
  years,
  km,
  body,
  transmission,
  fuel,
} = require("../../data.js");

const brands = carData.map((car) => car.brand);
const models = carData.map((car) => car.models).flat();

const carSchema = new mongoose.Schema({
  brand: { type: String, required: true, enum: brands },
  model: { type: String, required: true, enum: models },
  price: { type: String, required: true, enum: prices },
  year: { type: String, required: true, enum: years },
  km: { type: String, required: true, enum: km },
  body: { type: String, required: true, enum: body },
  transmission: { type: String, required: true, enum: transmission },
  fuel: { type: String, required: true, enum: fuel },
  image: [{ type: String, default: []}],
  description: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});


const CarModel = mongoose.model("Car", carSchema);

module.exports = CarModel;