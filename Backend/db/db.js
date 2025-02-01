const mongoose = require("mongoose");
const DB_NAME = require("./dbName.js");

const connectDb = async () => {
  try {
    const connectionInnstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connnected !! DB HOST: ${connectionInnstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb Connection Error", error);
    process.exit(1);
  }
};

module.exports = connectDb;
