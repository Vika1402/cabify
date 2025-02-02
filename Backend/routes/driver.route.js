const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerDriver } = require("../controllers/driver.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname").notEmpty().withMessage("first name is required"),
    body("vehicle.licensePlate")
      .notEmpty()
      .withMessage("License number is required"),
    body("vehicle.color").notEmpty().withMessage("Vehicle color is required"),
    body("vehicle.capacity")
      .notEmpty()
      .withMessage("Vehicle capacity is required"),
    body("vehicle.type")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Vehicle type is required"),
  ],
  registerDriver
);

module.exports = router;
