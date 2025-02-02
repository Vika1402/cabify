const { validationResult } = require("express-validator");
const Driver = require("../models/driver.model");
const { createDriver } = require("../services/driver.service");

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
