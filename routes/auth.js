const express = require("express");
const router = express.Router();

// Middlewares
const auth = require("../middlewares/auth");
// Controllers
const AuthControllers = require("../controllers/AuthControllers");

router.post("/login", AuthControllers.login);
router.post("/register", AuthControllers.register);

module.exports = router;
