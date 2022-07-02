const dotenv = require("dotenv");
dotenv.config();

const config = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
};

module.exports = config;
