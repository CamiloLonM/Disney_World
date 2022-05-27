const Character = require("../models/character");
const MoviesOrSeries = require("../models/moviesOrSerie");
const path = require("path");
const fs = require("fs");

const service = require("../services/characters");

// Punto 3
const getCharacters = async (req, res) => {
  try {
    let characters = await service.getCharacters();

    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// punto 5
const getCharactersId = async (req, res) => {
  try {
    let characters = await service.getCharactersId();

    return res.sendstatus(204).json(characters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const searchCharacter = async (req, res) => {
  try {
    const { query } = req;

    const characters = await service.searchCharacters(query);

    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postCharacters = async (req, res) => {
  try {
    const characters = await service.postCharacters();
    return res.status(201).json(characters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// PREGUNTAR ESTE
const putCharacters = async (req, res) => {
  // parte 9 del proyecto
  /**
   * 2- (modificar la imagen en caso de ser necesario) si alcanza el tiempo
   */
  try {
    const characters = await service.putCharacters();

    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const DeleteCharacters = async (req, res) => {
  try {
    let characters = await service.DeleteCharacters();

    return res.sendStatus(204).json(characters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCharacters,
  getCharactersId,
  searchCharacter,
  postCharacters,
  putCharacters,
  DeleteCharacters,
};
