const router = require("express").Router();
const {
  getAllUsers,
  getUser,
  deleteUser,
} = require("../controllers/user.controller");
const { authenticate } = require("../middleware/authentication.middleware");
const { permit } = require("../middleware/authorization.middleware");

router.use(authenticate);

router.get("/", permit("admin"), getAllUsers);
router.get("/myprofile", getUser);
router.delete("/:id", permit("admin"), deleteUser);

module.exports = router;
