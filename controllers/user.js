const Character = require("../models/characters");
const Gender = require("../models/gender");
const MoviesOrSeries = require("../models/moviesOrSeries");

const userGet = (req, res) => {
  res.json({
    msg: "Test Get",
  });
};

const userPost = async (req, res) => {
  await Character.create({
    name: req.name,
    image: req.image,
  }).then((characters) => {
    res.json(characters);
  });
};

const userPut = (req, res) => {
  res.json({
    msg: "Test Put",
  });
};

const userPatch = (req, res) => {
  res.json({
    msg: "Test Patch",
  });
};

const userDelete = (req, res) => {
  res.json({
    msg: "Test Delete",
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete,
};
