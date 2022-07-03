const router = require("express").Router();
const auth = require("./auth.route");
const product = require("./product.route");

router.use("/auth", auth);
router.use("/products", product);

module.exports = router;
