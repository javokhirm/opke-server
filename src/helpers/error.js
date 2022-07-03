const { validationResult } = require("express-validator");

class ErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

const handleError = (err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.status).json({ message: err.message, status: err.status });
    return;
  }

  res.status(err.status || 500).json({ message: err.message });
};

const invalidRoute = (req, res, next) => {
  res.status(404).json({ message: "Invalid route", status: 404 });
};

// error catching middleware for express validator
const validator = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result[0].msg;
  throw new ErrorHandler(400, error);
};

module.exports = { ErrorHandler, handleError, validator, invalidRoute };
