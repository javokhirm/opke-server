const User = require("../models/User");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.query.id;
  try {
    await User.deleteOne({ _id: userId });
    return res.status(200).json({ message: "Foydalanuvchi o'chirildi!" });
  } catch (error) {
    next(error);
  }
};
