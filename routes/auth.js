const { Router } = require("express");
const router = Router();

// Controllers
const AuthControllers = require("../controllers/AuthControllers");

// Home
router.get("/", (req, res) => res.json({ hello: "World" }));

// Rutas
router.post("/login", AuthControllers.login);
router.post("/register", AuthControllers.register);

module.exports = router;
