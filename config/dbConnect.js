const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database is connected !");
  } catch (error) {
    console.log("Database is not connected !");
  }
};

module.exports = connectDB;
