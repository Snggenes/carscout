const http = require("http");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

const server = http.createServer(app);

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
