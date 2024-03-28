const dotenv = require("dotenv").config();

const UserModel = require("./models/user");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.auth;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findOne({ email: payload.email });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {}
};

module.exports = authMiddleware;    
