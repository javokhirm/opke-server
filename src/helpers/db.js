const mongoose = require("mongoose");
const config = require("../config");

mongoose
  .connect(config.MONGODB_URL)
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log(err));
