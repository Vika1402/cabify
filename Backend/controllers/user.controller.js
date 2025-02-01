const { validationResult } = require("express-validator");
const { createUser } = require("../services/user.service");

module.exports.registerUser = async (req, res, next) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    const { fullname, email, password } = req.body;

    // Create user
    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password,
    });

    if (!user) {
      return res.status(500).json({ error: "User creation failed" });
    }

    // Ensure user model has `generateAuthToken` method
    if (typeof user.generateAuthToken !== "function") {
      return res
        .status(500)
        .json({ error: "Authentication token generation failed" });
    }

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
