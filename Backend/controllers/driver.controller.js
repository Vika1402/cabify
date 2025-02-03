const { validationResult } = require("express-validator");
const { createDriver } = require("../services/driver.service");
const Driver = require("../models/driver.model");
const BlacklistToken = require("../models/blackListToken.model");

module.exports.registerDriver = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(401).json({ error: error.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isDriverExist = await Driver.findOne({ email });
  if (isDriverExist) {
    return res.status(400).json({ message: "Driver already exixs" });
  }

  const driver = await createDriver({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password,
    color: vehicle.color,
    licensePlate: vehicle.licensePlate,
    capacity: vehicle.capacity,
    type: vehicle.type,
  });

  const token = driver.generateAuthToken();
  res.status(200).json({ token, driver });
};

module.exports.loginDriver = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ error: error.array() });
  }
  const driver = await Driver.findOne({ email }).select("+password");
  if (!driver) {
    return res
      .status(401)
      .json({ message: "driver user not register or exists" });
  }

  const isPassword = driver.comparePassword(password);
  if (!isPassword) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = await driver.generateAuthToken();
  if (!token) {
    return res.status(401).json({ message: "Error in generate token" });
  }
  res.status(200).cookie("token", token).json({ token, driver });
};

module.exports.driverProfile = async (req, res, next) => {
  const driver = req.driver;
  res.status(200).json({ driver });
};

module.exports.logoutDriver = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlacklistToken.create({ token });
  res.status(200).json({ message: "Driver logout successfully" });
};
