const MoviesOrSerie = require("../models/moviesOrSerie");
const Character = require("../models/character");

const service = require("./characters_moviesOrSeries");

module.exports.getMovies = async () => {
  return await MoviesOrSerie.findAll({
    attributes: ["title", "image", "creation_date"],
  });
};

module.exports.getMovieById = async (id) => {
  return await MoviesOrSerie.findOne({
    where: {
      id,
    },
    include: {
      model: Character,
    },
    raw: false,
  });
};

// PUNTO 10 QUERY PARAMS
module.exports.searchMovies = async (params) => {
  let queryFilter = {};

  if (params) {
    queryFilter = {
      ...queryFilter,
      where: params,
    };
  }

  return await Character.findAll(queryFilter);
};

module.exports.postMovie = async (body, filename) => {
  const newMovieOrSerie = await service.createMoviesOrSerie({
    ...body,
    image: filename,
  });
  return newMovieOrSerie;
};

module.exports.putMovie = async (id, body) => {
  await MoviesOrSerie.update(body, {
    where: {
      id,
    },
  });
  // await movie.save();  PREGUNTAR EL GUARDAR SI LO REQUIERE
};

module.exports.deleteMovie = async (id) => {
  await MoviesOrSerie.destroy({
    where: {
      id,
    },
  });
};
