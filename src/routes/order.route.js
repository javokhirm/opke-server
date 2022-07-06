const router = require("express").Router();
const {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");
const { authenticate } = require("../middleware/authentication.middleware");
const { permit } = require("../middleware/authorization.middleware");

router.use(authenticate);

router.get("/", permit("admin"), getAllOrders);
router.post("/", createOrder);
router.put("/", permit("admin"), updateOrder);
router.delete("/", permit("admin"), deleteOrder);

module.exports = router;
