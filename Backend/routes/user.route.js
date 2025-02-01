/* This JavaScript code snippet is setting up a route for user registration using the Express
framework. Here's a breakdown of what each part does: */
const express = require("express");
const { body } = require("express-validator");
const {
  registerUser,

  loginUser,
  getUserProfile,
} = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/auth.middlewares");

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  loginUser
);
router.get("/profile", isAuthenticated, getUserProfile);

module.exports = router;
