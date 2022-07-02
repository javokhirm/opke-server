const router = require("express").Router();
const auth = require("./auth.route");
const product = require("./product.route");

router.post("/auth", auth);
router.post("/products", product);

module.exports = router;
