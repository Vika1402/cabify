const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/user", userRoutes);
module.exports = app;
