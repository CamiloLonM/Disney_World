const { Router } = require("express");

const router = Router();

const {
  getMovies,
  getMovieById,
  searchMovie,
  deleteMovie,
  postMovie,
  putMovie,
} = require("../controllers/moviesOrSeries");

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.get("/search", searchMovie);
router.post("/", postMovie);
router.put("/:id", putMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
