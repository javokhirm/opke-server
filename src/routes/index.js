const router = require("express").Router();
const auth = require("./auth.route");
const product = require("./product.route");
const order = require("./order.route");
const user = require("./user.route");

router.use("/auth", auth);
router.use("/products", product);
router.use("/orders", order);
router.use("/user", user);

module.exports = router;
