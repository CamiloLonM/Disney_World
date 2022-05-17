const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");
const characters = require("./characters");
const MoviesOrSeries = require("./moviesOrSeries");

class Gender extends Model {}

Gender.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: DataTypes.image,
  Associated: {
    movies: DataTypes.STRING,
    Orseries: DataTypes.STRING,
    allowNull: false,
  },
  // Asociar los ( Associated: que son seris o pelicula de la carpeta personajes)
  sequelize,
  modelName: "Gender",
});

Gender.MoviesOrSeries = Gender.belongsTo(MoviesOrSeries);

module.exports = Gender;
