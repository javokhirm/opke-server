const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: Schema.Types.ObjectId,
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product" },
      amount: Number,
    },
  ],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
