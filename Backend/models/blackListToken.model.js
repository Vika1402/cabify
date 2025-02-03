const mongoose = require("mongoose");

// Define the schema for blacklisted tokens
const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

// Create a model from the schema
const BlacklistToken = mongoose.model("BlacklistToken", blacklistSchema);

module.exports = BlacklistToken;
