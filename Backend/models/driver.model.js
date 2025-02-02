const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const driverSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  soketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  vehicle: {
    type: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
    model: {
      type: String,
    },
    licensePlate: {
      type: String,
      required: true,
      unique: true,
    },
    color: {
      type: String,
    },
    capacity: {
      type: Number,
      required: true,
      default: 1,
    },
  },

  locations: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

driverSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

driverSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

driverSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.id }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
