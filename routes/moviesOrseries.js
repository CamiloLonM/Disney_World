const { Router } = require("express");

const router = Router();

const {
  getMovies,
  getMovieById,
  moviesDelete,
  moviesPost,
  moviesPut,
} = require("../controllers/moviesOrSeries");

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", moviesPost);
router.put("/:id", moviesPut);
router.delete("/:id", moviesDelete);

module.exports = router;
