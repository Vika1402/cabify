const Driver = require("../models/driver.model");

module.exports.createDriver = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  licensePlate,
  capacity,
  model,
  type,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !licensePlate ||
    !capacity ||
    !type
  ) {
    throw new Error("All fields require");
  }

  const driver = Driver.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      type,
      licensePlate,
      color,
      capacity,
    },
  });
  return driver;
};
