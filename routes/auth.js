const express = require("express");
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const app = express;

const router = Router();

const { authGet, authPost, getProtected } = require("../controllers/auth");

router.get("/login", authGet);

router.get("/register", authPost);
router.get("/protected", getProtected);

module.exports = router;
