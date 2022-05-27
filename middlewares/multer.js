const multer = require('multer');

const multerInit = multer({
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    dest: './images/characters'
});

const multerSingleFile = multerInit.single('image');

module.exports = multerSingleFile;
