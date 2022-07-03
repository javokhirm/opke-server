const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      picture: req.body.picture,
    });
    await product.save();

    return res.status(200).json({ message: "Mahsulot yaratildi!", product });
  } catch (error) {
    next(error);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.query.id },
      { ...req.body }
    );
    return res
      .status(200)
      .json({ message: "Mahsulot o'zgartirildi.", product });
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.query.id });
    return res.status(200).json({ message: "Mahsulot o'chirildi!" });
  } catch (error) {
    next(error);
  }
};
