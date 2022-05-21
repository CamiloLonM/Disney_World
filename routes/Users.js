// Controlador de ruta via acceso
const { Router } = require("express");

const router = Router();

const {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete,
  getMovies,
} = require("../controllers/user");

router.get("/", userGet);
router.get("/movies", getMovies);
router.post("/", userPost);
router.put("/:id", userPut);
router.patch("/", userPatch);
router.delete("/:id", userDelete);

module.exports = router;
