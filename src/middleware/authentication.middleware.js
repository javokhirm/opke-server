const jwt = require("jsonwebtoken");
const config = require("../config");
const { ErrorHandler } = require("../helpers/error");

exports.authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  try {
    if (!token) {
      throw new ErrorHandler(403, "Sizda token mavjud emas!");
    }

    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    next(error);
  }
};
