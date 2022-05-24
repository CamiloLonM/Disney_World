const Character = require("../models/character");
const Gender = require("../models/gender");
const MoviesOrSeries = require("../models/moviesOrSerie");

// Punto 3
const userGet = async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// punto 5
const getUserById = async (req, res) => {
  try {
    const character = await Character.findAll({
      where: {
        id: req.params.id,
      },
      include: {
        model: MoviesOrSeries,
      },
    });
    if (character === null) {
      console.log("Not found !");
    }
    res.json(character);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const userPost = async (req, res) => {
  const { name, image } = req.body;

  if (!name || !image)
    res.status(400).json({ message: `please check the data` });
  try {
    const newCharacter = await Character.create({
      name,
      image,
      ...req.body,
    });
    res.status(201).json(newCharacter);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
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
    return res.status(500).json({ message: error.message });
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
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  userGet,
  getUserById,
  userPost,
  userPut,
  userPatch,
  userDelete,
};
