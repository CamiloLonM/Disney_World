const Character = require("../models/character");
const service = require("./characters_moviesOrSeries");

module.exports.getCharacters = async () => {
  return await Character.findAll({
    attributes: ["name", "image"],
  });
};

module.exports.getCharacterById = async (id) => {
  return await Character.findOne({
    where: {
      id
    },
    include: {
      model: MoviesOrSeries,
    },
    raw: false,
  });
};

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

module.exports.createCharacter = async (body) => {
  const newCharacter = await Character.create(body);
  console.log("AAA -> ", newCharacter);
  if (body.movieOrSerie) {
    await service.createCharacter_MoviesOrSeries({
      CharacterId: newCharacter.dataValues.id,
      FilmId: body.movieOrSerie,
    });
  }

  return newCharacter;
};

module.exports.postCharacter = async (body, filename) => {
  const newCharacter = await service.createCharacter({
    ...body,
    image: filename,
  });

  return newCharacter;
};

module.exports.putCharacter = async (id, body) => {
  await Character.update(body, {
    where: {
      id
    }
  });
};

module.exports.deleteCharacter = async (id) => {
  await Character.destroy({
    where: {
      id,
    },
  });
};
