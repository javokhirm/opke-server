const { ErrorHandler } = require("../helpers/error");

exports.permit = (...permittedRoles) => {
  return (req, res, next) => {
    if (permittedRoles && !permittedRoles.includes(req.userRole)) {
      throw new ErrorHandler(
        401,
        "Bu joyga kirishga faqat adminda ruhsat bor."
      );
    }
    next();
  };
};
