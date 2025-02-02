const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const driverRoute = require("./routes/driver.route");
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/user", userRoutes);
app.use("/driver", driverRoute);
module.exports = app;
