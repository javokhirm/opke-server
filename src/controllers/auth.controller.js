const { ErrorHandler } = require("../helpers/error");
const User = require("../models/User");
const { generateJwt } = require("../utils/jwt.util");

exports.createUser = async (req, res, next) => {
  try {
    const userExists = await User.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    if (userExists) {
      throw new ErrorHandler(
        400,
        "Bu raqamli foydalanuvchi allaqachon mavjud."
      );
    }

    const user = await User.create({
      username: req.body.username,
      phoneNumber: req.body.phoneNumber,
      password: req.body.newPassword,
      role: req.body.role,
    });
    await user.save();

    return res
      .status(200)
      .json({ message: "Ro'yxatdan o'tish muvaffaqqiyatli!", user });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      phoneNumber: req.body.phoneNumber,
    }).lean();

    if (!user) {
      throw new ErrorHandler(404, "Bu raqamli foydalanuvchi mavjud emas.");
    }

    if (user.password !== req.body.password) {
      throw new ErrorHandler(404, "Parol xato!");
    }
    const token = generateJwt(user.id, user.role);
    delete user.password;
    user.token = token;

    return res
      .status(200)
      .json({ message: "Tizimga muvaffaqqiyatli kirdingiz!", user });
  } catch (error) {
    next(error);
  }
};
