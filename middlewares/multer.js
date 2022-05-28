const multer = require('multer');

const config = {
    limits: {
        fileSize: 5 * 1024 * 1024
    }
}

const multerInitCharacters = multer({
    ...config,
    dest: './images/characters'
});

module.exports.multerSingleFileCharacter = multerInitCharacters.single('image');

const multerInitMovieOrSerie = multer({
    ...config,
    dest: './images/movieOrSerie'
});

module.exports.multerSingleFileMovieOrSerie = multerInitMovieOrSerie.single('image');