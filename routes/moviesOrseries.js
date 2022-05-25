const { Router } = require("express");

const router = Router();

const {
  moviesGet,
  moviesGetId,
  moviesDelete,
  moviesPost,
  moviesPut,
  //moviesPatch,
} = require("../controllers/moviesOrSeries");

router.get("/", moviesGet);
router.get("/:id", moviesGetId);
router.post("/", moviesPost);
router.put("/:id", moviesPut);
//router.patch("/", moviesPatch);
router.delete("/:id", moviesDelete);

module.exports = router;
