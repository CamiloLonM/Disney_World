const Character = require("../models/characters");
const Gender = require("../models/gender");
const MoviesOrSeries = require("../models/moviesOrSeries");

const userGet = async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getMovies = async (req, res) => {
  // campo 7
  try {
    const { id, image, title } = req.params;
    const movies = await MoviesOrSeries.findOne({
      where: {
        id,
        image,
        title,
      },
    });
    if (!movies) return res.status(404).json({ message: "movies don't exist" });
    res.json;
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
};

const userPost = async (req, res) => {
  const { name, history, image } = req.body;
  try {
    const newCharacter = await Character.create({
      name,
      history,
      image,
    });
    res.json(newCharacter);
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
};

const userPatch = async (req, res) => {
  res.json({
    msg: "Test Patch",
  });
};

const userPut = async (req, res) => {
  // parte 9 del proyecto
  try {
    const { id } = req.params;
    const { name, age, MoviesOrSeries } = req.body;
    const character = await Character.findByPk(id);
    character.name = name;
    character.age = age;
    character.MoviesOrSeries = MoviesOrSeries;

    await character.save();

    res.json(character);
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
};

const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Character.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
};

module.exports = {
  userGet,
  getMovies,
  userPost,
  userPut,
  userPatch,
  userDelete,
};
