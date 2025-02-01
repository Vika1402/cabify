const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "First name must be at least 3 charcters long"],
    },
    lastname: {
      type: String,
      minLength: [3, "First name must be at least 3 charcters long"],
    },
  },
  email: {
    type: String,
    minLength: [4, "email must be atleast 4 character long"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_TOKEN_SECRET);
  return token;
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};


const User = mongoose.model("User", userSchema);

module.exports = User;
