const { Router } = require("express");

const router = Router();

const {
  moviesGet,
  moviesGetId,
  moviesDelete,
  moviesPost,
  moviesPut,
} = require("../controllers/moviesOrSeries");

router.get("/", moviesGet);
router.get("/:id", moviesGetId);
router.post("/", moviesPost);
router.put("/:id", moviesPut);

router.delete("/:id", moviesDelete);

module.exports = router;
