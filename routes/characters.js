// Controlador de ruta via acceso
const { Router } = require("express");

const router = Router();

const { multerSingleFileCharacter } = require("../middlewares/multer");

const {
  getCharacters,
  getCharacterById,
  searchCharacter,
  postCharacter,
  putCharacter,
  deleteCharacter,
} = require("../controllers/characters");

router.get("/", getCharacters);
router.get("/search", searchCharacter);
router.get("/:id", getCharacterById);
router.post("/", multerSingleFileCharacter, postCharacter);
router.put("/:id", multerSingleFileCharacter, putCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;
