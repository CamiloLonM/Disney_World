const MoviesOrSeries = require("../models/moviesOrSerie");
const Character = require("../models/character");

const service = require("./characters_moviesOrSeries");

module.exports.moviesGet = async () => {
  const moviesOrSerie = await MoviesOrSeries.findAll({
    attributes: ["title", "image", "creation_date"],
  });
  return moviesOrSerie; // preguntar
};

module.exports.moviesGetId = async () => {
  const moviesOrSerie = await MoviesOrSeries.findAll({
    where: {
      id: req.params.id,
    },
    include: {
      model: Character,
    },
  });
  if (moviesOrSerie === null) {
  }
};

module.exports.moviesPut = async () => {
  const { id } = req.params;
  const movie = await MoviesOrSeries.findOne({
    where: { id },
  });
  movie.set(req.body);
  await movie.save();
};

module.exports.moviesPost = async () => {
  const newMovieOrSerie = await MoviesOrSeries.create({
    title,
    image,
    ...req.body,
  });
  return newMovieOrSerie;
};

module.exports.moviesDelete = async () => {
  const { id } = req.params;
  await MoviesOrSeries.destroy({
    where: {
      id,
    },
  });
};
