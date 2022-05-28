const service = require("../services/moviesOrSeries");
// 7
const getMovies = async (req, res) => {
  try {
    const moviesOrSeries = await service.getMovie();

    return res.status(200).json(moviesOrSeries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// parte 8
const getMovieById = async (req, res) => {
  try {
    const movieOrSerie = await service.getMovieById(req.params.id);

    if (!movieOrSerie) {
      return res.sendStatus(204);
    }

    return res.status(200).json(movieOrSerie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// PUNTO 10 QUERY PARAMS
const searchMovie = async (req, res) => {
  try {
    const { query } = req;

    const movies = await service.searchMovies(query);

    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postMovie = async (req, res) => {
  try {
    if (!req.body.title || !req.file) {
      return res.status(400).json({ message: `please check the data` });
    }

    const moviesOrSerie = await service.postMovie(req.body, req.file.filename);
    res.status(201).json(moviesOrSerie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Parte 9
const putMovie = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: `please check the data` });
    }

    if (!service.getMovieById(req.params.id)) {
      return res.status(404).json({ message: "Movie not found." });
    }

    await service.putMovie(req.params.id, req.body);

    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    if (!service.getMovieById(req.params.id)) {
      return res.status(404).json({ message: "Movie not found." });
    }

    await service.deleteMovie(req.params.id);

    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMovies,
  getMovieById,
  searchMovie,
  deleteMovie,
  putMovie,
  postMovie,
};
