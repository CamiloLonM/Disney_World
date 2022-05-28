const Character = require("../models/character");
const Gender = require("../models/gender");
const MoviesOrSeries = require("../models/moviesOrSerie");

const service = require("../services/moviesOrSeries");
// 7
const getMovies = async (req, res) => {
  try {
    const moviesOrSeries = await service.getMovies();

    return res.status(200).json(moviesOrSeries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// parte 8
const getMovieById = async (req, res) => {
  try {
    const movieOrSerie = await service.getMovieById(req.params.id);

    if(!movieOrSerie) {
      return res.sendStatus(204);
    }

    return res.status(200).json(movieOrSerie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Parte 9
const moviesPut = async (req, res) => {
  try {
    const moviesOrSeries = await service.moviesPut();
    return res.status(201).json(moviesOrSeries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const moviesPost = async (req, res) => {
  const { title, image } = req.body;
  if (!title || !image) res.status(400); /// PREGUNTAR
  try {
    const moviesOrSeries = await service.moviesPost();
    res.status(201).json(moviesOrSeries);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const moviesDelete = async (req, res) => {
  try {
    const moviesOrSeries = await service.moviesDelete();
    return res.sendStatus(204).json(moviesOrSeries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMovies,
  getMovieById,
  moviesDelete,
  moviesPut,
  moviesPost,
};
