const router = require("express").Router();
const { getAllUsers, deleteUser } = require("../controllers/user.controller");
const { authenticate } = require("../middleware/authentication.middleware");
const { permit } = require("../middleware/authorization.middleware");

router.use(authenticate);

router.get("/", permit("admin"), getAllUsers);
router.delete("/", permit("admin"), deleteUser);

module.exports = router;
