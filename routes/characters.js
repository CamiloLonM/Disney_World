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
router.get("/search", searchCharacter);
router.get("/:id", getCharacterById);
router.post("/", multerSingleFileCharacter, postCharacter);
router.put("/:id", multerSingleFileCharacter, putCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;
