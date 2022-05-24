// Controlador de ruta via acceso
const { Router } = require("express");

const router = Router();

const {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete,
  getUserById,
} = require("../controllers/characters");

router.get("/", userGet);
router.get("/:id", getUserById);
router.post("/", userPost);
router.put("/:id", userPut);
router.patch("/", userPatch);
router.delete("/:id", userDelete);

module.exports = router;
