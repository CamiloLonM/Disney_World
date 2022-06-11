const { Router } = require("express");

const router = Router();
const { multerSingleFileMovieOrSerie } = require("../middlewares/multer");

const {
  getMovies,
  getMovieById,
  searchMovie,
  deleteMovie,
  postMovie,
  putMovie,
} = require("../controllers/moviesOrSeries");

router.get("/", getMovies);
router.get("/search", searchMovie);
router.get("/:id", getMovieById);
router.post("/", multerSingleFileMovieOrSerie, postMovie);
router.put("/:id", multerSingleFileMovieOrSerie, putMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
