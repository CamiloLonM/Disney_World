const Character = require("../models/character");
const Gender = require("../models/gender");
const MoviesOrSeries = require("../models/moviesOrSerie");

// lochassanskajs//personajes/name/:id
//lochassanskajs//personajes?name=nombre

const nameGet = async (req, res) => {
  const name = req.query.name;
  Character.findAll({ name: name }, (err, characterDB) => {
    // preguntar a sandro find o finall
    if (err) {
      return res.status(500).json({
        success: false,
        msg: "Not character found!",
        err,
      });
    } else {
      return res.status(200).json({
        success: true,
        character: characterDB,
      });
    }
  });
};

const ageGet = async (req, res) => {
  const age = req.query.age;
  Character.findAll({ age: age }, (err, characterDB) => {
    if (err) {
      return res.status(200).json({
        success: false,
        msg: "Not character found!",
        err,
      });
    } else {
      return res.status(500).json({
        success: true,
        character: characterDB,
      });
    }
  });
};

//preguntar
const moviesGet = async (req, res) => {
  const movies = req.query.Character.findAll(
    { movies: movies },
    function (err, characterBD) {
      if (err) {
        return res.status(200).json({
          success: false,
          msg: "No character found!",
          err,
        });
      } else {
        return res.status(500).json({
          success: true,
          character: characterBD,
        });
      }
    }
  );
};

module.exports = {
  nameGet,
  ageGet,
  moviesGet,
};
