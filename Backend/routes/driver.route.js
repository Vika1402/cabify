const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  registerDriver,
  loginDriver,
  logoutDriver,
  driverProfile,
} = require("../controllers/driver.controller");
const {
  isAuthenticated,
  isAuthenticatedDriver,
} = require("../middlewares/auth.middlewares");
const { logoutUser } = require("../controllers/user.controller");

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

router.post("/login", loginDriver);

router.get("/profile", isAuthenticatedDriver, driverProfile);

router.post("/logout", isAuthenticatedDriver, logoutDriver);

module.exports = router;
