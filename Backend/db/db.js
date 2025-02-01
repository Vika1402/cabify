const mongoose = require("mongoose");
const DB_NAME = require("./dbName.js");

function connectDb() {
  try {
    mongoose
      .connect(`${process.env.MONGODB_URL}`)
      .then((res) => {
        console.log(`connect to db`);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(`mongodb connected`);
    //console.log(dbConnect);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDb;
