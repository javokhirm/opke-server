const router = require("express").Router();
const { getAllProducts } = require("../controllers/product.controller");

router.post("/products", getAllProducts);

module.exports = router;
