const jwt = require("jsonwebtoken");
const config = require("../config");

exports.generateJwt = (id, role) => {
  const payload = { id, role };
  return jwt.sign(payload, config.JWT_SECRET);
};
