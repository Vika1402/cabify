const BlacklistToken = require("../models/blackListToken.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
module.exports.isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isBalcklisted = await BlacklistToken.findOne({ token });
  if (isBalcklisted) {
    return res.status(401).json({ message: "Unauthorized token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    const user = await User.findById(decoded._id);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
