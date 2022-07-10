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

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", authenticate, permit("admin"), createProduct);
router.put("/:id", authenticate, permit("admin"), updateProduct);
router.delete("/:id", authenticate, permit("admin"), deleteProduct);

module.exports = router;
