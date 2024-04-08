const http = require("http");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const authRouter = require("./routes/auth");
const carsRouter = require('./routes/cars')
const addressVerifyRouter = require("./routes/addressVerify");
const distanceCalculationRouter = require("./routes/distanceCalculation");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use('/cars', carsRouter);
app.use("/address-verify", addressVerifyRouter);
app.use("/distance-calculation", distanceCalculationRouter);

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

const server = http.createServer(app);

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
