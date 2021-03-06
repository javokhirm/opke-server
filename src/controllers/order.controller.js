const Order = require("../models/Order");

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("products.product");

    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

exports.getMyOrders = async (req, res, next) => {
  try {
    const myOrders = await Order.find({ user: req.userId }).populate(
      "products.product"
    );

    return res.status(200).json(myOrders);
  } catch (error) {
    next(error);
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create({ ...req.body });
    return res.status(200).json({ message: "Buyurtma yaratildi!", order });
  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {};

exports.deleteOrder = async (req, res, next) => {
  try {
    await Order.deleteOne({ _id: req.params.id });
    return res.status(200).json({ message: "Buyurtma o'chirildi!" });
  } catch (error) {
    next(error);
  }
};
