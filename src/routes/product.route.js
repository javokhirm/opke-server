const router = require("express").Router();
const { getAllProducts } = require("../controllers/product.controller");
const { authenticate } = require("../middleware/authentication.middleware");
const { permit } = require("../middleware/authorization.middleware");

router.use(authenticate);

router.get("/", permit("admin"), getAllProducts);

module.exports = router;
