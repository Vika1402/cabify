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
const origin = "*";
app.use(cors({ origin }));

app.use("/user", userRoutes);
app.use("/driver", driverRoute);
module.exports = app;
