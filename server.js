const express = require("express");
const connectDB = require("./config/DBconnect");
const app = express();
const passport = require("passport");

require("dotenv").config();

connectDB();

app.use(express.json());
app.use(passport.initialize());
app.use("/user", require("./routes/user"));

app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log("server is running...")
);
