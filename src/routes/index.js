const router = require("express").Router();
const auth = require("./auth.route");
const product = require("./product.route");
const order = require("./order.route");

router.use("/auth", auth);
router.use("/products", product);
router.use("/orders", order);

module.exports = router;
