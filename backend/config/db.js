const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MONGO DATABASE CONNECTED ${mongoose.connection.host}`.bgYellow.white
    );
  } catch (error) {
    console.log(`Mongodb server Issue ${error}`.bgCyan.white);
  }
};
module.exports = connectDB;
