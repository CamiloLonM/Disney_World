const MoviesOrSerie = require("../models/moviesOrSerie");
const Character = require("../models/character");

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

  return await MoviesOrSerie.findAll(queryFilter);
};

module.exports.postMovie = async (body, filename) => {
  return await MoviesOrSerie.create({
    ...body,
    image: filename,
  });
};

module.exports.putMovie = async (id, body, filename) => {
  await MoviesOrSerie.update(
    {
      ...body,
      image: filename,
    },
    {
      where: {
        id,
      },
    }
  );
  // await movie.save();
};

module.exports.deleteMovie = async (id) => {
  await MoviesOrSerie.destroy({
    where: {
      id,
    },
  });
};
