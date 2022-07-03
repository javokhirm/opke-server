const router = require("express").Router();
const { validator } = require("../helpers/error");
const { registrationSchema, loginSchema } = require("../schemas/auth.schema");
const { createUser, login } = require("../controllers/auth.controller");

router.post("/register", registrationSchema, validator, createUser);
router.post("/login", loginSchema, validator, login);

module.exports = router;
