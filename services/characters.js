const Character = require("../models/character");
const service = require("./characters_moviesOrSeries");

module.exports.getCharacters = async () => {
  return await Character.findAll({
    attributes: ["name", "image"],
  });
};

module.exports.getCharactersId = async () => {
  const character = await Character.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: MoviesOrSeries,
    },
    raw: false,
  });
  if (!character) {
  }
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

module.exports.postCharacters = async () => {
  if (!req.body.name || !req.file) {
    return res.status(400).json({ message: `please check the data` });
  }
  const newCharacter = await service.createCharacter({
    ...req.body,
    image: req.file.filename,
  });
  return newCharacter;
};

module.exports.putCharacters = async () => {
  /**  arte 9 del proyecto
   * 1- pasar la logica al service
   * 2- (modificar la imagen en caso de ser necesario) si alcanza el tiempo
   */
  const { id } = req.params;
  const { name, age, MoviesOrSeries } = req.body;
  const character = await Character.findByPk(id);
  character.name = name;
  character.age = age;
  character.MoviesOrSeries = MoviesOrSeries;

  await character.save();
};

module.exports.DeleteCharacters = async () => {
  const { id } = req.params;
  await Character.destroy({
    where: {
      id,
    },
  });
};
