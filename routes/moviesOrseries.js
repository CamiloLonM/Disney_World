const { Router } = require("express");
const router = Router();

// Middlewares
const auth = require("../middlewares/auth");
const { multerSingleFileMovieOrSerie } = require("../middlewares/multer");

const {
  getMovies,
  getMovieById,
  searchMovie,
  deleteMovie,
  postMovie,
  putMovie,
} = require("../controllers/moviesOrSeries");

router.get("/", auth, getMovies);
router.get("/search", auth, searchMovie);
router.get("/:id", auth, getMovieById);
router.post("/", auth, multerSingleFileMovieOrSerie, postMovie);
router.put("/:id", auth, multerSingleFileMovieOrSerie, putMovie);
router.delete("/:id", auth, deleteMovie);

module.exports = router;
