// Controlador de ruta via acceso
const { Router } = require("express");

const router = Router();

const multerMiddleware = require("../middlewares/multer");

const {
  getCharacters,
  getCharactersId,
  searchCharacter,
  postCharacters,

  putCharacters,
  DeleteCharacters,
} = require("../controllers/characters");

router.get("/", getCharacters);
router.get("/search", searchCharacter);
router.get("/:id", getCharactersId);
router.post("/", multerMiddleware, postCharacters);
router.put("/:id", putCharacters);

router.delete("/:id", DeleteCharacters);

module.exports = router;
