const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: Schema.Types.ObjectId,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  amount: String,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
