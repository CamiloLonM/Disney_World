const Character_MoviesOrSeries = require('../models/character_MoviesOrSeries');

module.exports.createCharacter_MoviesOrSeries = async (body) => {
    return await Character_MoviesOrSeries.create(body);
}