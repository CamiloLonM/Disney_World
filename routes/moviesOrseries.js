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
router.get("/search", searchMovie);
router.get("/:id", getMovieById);
router.post("/", multerSingleFileMovieOrSerie, postMovie);
router.put("/:id", multerSingleFileMovieOrSerie, putMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
