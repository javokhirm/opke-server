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

  return res.status(err.status || 500).json({ message: err.message });
};

module.exports = { ErrorHandler, handleError };
