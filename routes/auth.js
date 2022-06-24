const { Router } = require("express");
const router = Router();

// Controllers
const AuthControllers = require("../controllers/AuthControllers");

// Rutas
router.post("/login", AuthControllers.login);
router.post("/register", AuthControllers.register);

module.exports = router;
