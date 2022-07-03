const { body, check } = require("express-validator");
const { ErrorHandler } = require("../helpers/error");

exports.registrationSchema = [
  body("username")
    .exists()
    .withMessage("Ism kiritish shart.")
    .isLength({ min: 4 })
    .withMessage("Ism eng kamida 4 ta harfdan iborat bo'lishi kerak.")
    .isLength({ max: 12 })
    .withMessage("Ism 12 ta harfdan ortiq bo'lmasligi kerak."),
  body("phoneNumber").exists().withMessage("Telefon raqamni kiritish shart."),
  body("password")
    .exists()
    .isLength({ min: 8 })
    .withMessage("Parol eng kamida 8 ta harfdan iborat bo'lishi kerak.")
    .isLength({ max: 30 })
    .withMessage("Parol 30 ta harfdan ortiq bo'lmasligi kerak."),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new ErrorHandler(400, "Parollar mos kelmadi.");
    }
    return true;
  }),
];

exports.loginSchema = [
  body("phoneNumber").exists().withMessage("Telefon raqamni kiritish shart."),
  body("password")
    .exists()
    .isLength({ min: 8 })
    .withMessage("Parol eng kamida 8 ta harfdan iborat bo'lishi kerak.")
    .isLength({ max: 30 })
    .withMessage("Parol 30 ta harfdan ortiq bo'lmasligi kerak."),
];
