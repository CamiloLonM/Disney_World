// Controlador de ruta via acceso
const { Router } = require("express");
const router = Router();

// Middlewares
const auth = require("../middlewares/auth");
const { multerSingleFileCharacter } = require("../middlewares/multer");

// Rutas
const {
  getCharacters,
  getCharacterById,
  searchCharacter,
  postCharacter,
  putCharacter,
  deleteCharacter,
} = require("../controllers/characters");

router.get("/", auth, getCharacters);
router.get("/search", auth, searchCharacter);
router.get("/:id", auth, getCharacterById);
router.post("/", auth, multerSingleFileCharacter, postCharacter);
router.put("/:id", auth, multerSingleFileCharacter, putCharacter);
router.delete("/:id", auth, deleteCharacter);

module.exports = router;
