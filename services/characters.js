const Character = require("../models/character");
const MoviesOrSeries = require("../models/moviesOrSerie");

module.exports.getCharacters = async () => {
  return await Character.findAll({
    attributes: ["name", "image"],
  });
};

module.exports.getCharacterById = async (id) => {
  return await Character.findOne({
    where: {
      id,
    },
    include: {
      model: MoviesOrSeries,
    },
    raw: false,
  });
};

// PUNTO 6 QUERY PARAMS
module.exports.searchCharacters = async (params) => {
  let queryFilter = {};

  if (params) {
    queryFilter = {
      ...queryFilter,
      where: params,
    };
  }

  return await Character.findAll(queryFilter);
};

module.exports.postCharacter = async (body, filename) => {
  return await Character.create({
    ...body,
    image: filename,
  });
};

module.exports.putCharacter = async (id, body, filename) => {
  await Character.update(
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
};

module.exports.deleteCharacter = async (id) => {
  await Character.destroy({
    where: {
      id,
    },
  });
};
