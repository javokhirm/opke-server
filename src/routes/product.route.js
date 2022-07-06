const router = require("express").Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const { authenticate } = require("../middleware/authentication.middleware");
const { permit } = require("../middleware/authorization.middleware");

router.use(authenticate);

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", permit("admin"), createProduct);
router.put("/", permit("admin"), updateProduct);
router.delete("/", permit("admin"), deleteProduct);

module.exports = router;
