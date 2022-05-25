const Character = require("../models/character");
const Gender = require("../models/gender");
const MoviesOrSeries = require("../models/moviesOrSerie");

// 7
const moviesGet = async (req, res) => {
  try {
    const moviesOrSerie = await MoviesOrSeries.findAll({
      attributes: ["title", "image"],
    });
    return res.status(200).json(moviesOrSerie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// parte 8
const moviesGetId = async (req, res) => {
  try {
    const moviesOrSerie = await MoviesOrSeries.findAll({
      where: {
        id: req.params.id,
      },
      include: {
        model: Character,
      },
    });
    if (moviesOrSerie === null) {
      return res.status(404).json({ message: "Not found !" });
    }
    res.json(moviesOrSerie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Parte 9
const moviesPut = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await MoviesOrSeries.findOne({
      where: { id },
    });
    movie.set(req.body);
    await movie.save();

    res.json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const moviesPost = async (req, res) => {
  const { title, image } = req.body;

  if (!title || !image) res.status(400);
  try {
    const newMovieOrSerie = await MoviesOrSeries.create({
      title,
      image,
      ...req.body,
    });
    res.status(201).json(newMovieOrSerie);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const moviesDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await MoviesOrSeries.destroy({
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
  moviesGet,
  moviesGetId,
  moviesDelete,
  moviesPut,
  moviesPost,
};
