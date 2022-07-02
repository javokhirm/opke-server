const router = require("express").Router();
const { createUser } = require("../controllers/auth.controller");

router.post("/register", createUser);

module.exports = router;
