const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");
const Character = require("./characters");

class MoviesOrSeries extends Model {}
MoviesOrSeries.init({
  tittle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.image,
    allowNull: false,
  },
  creationDate: DataTypes.DATE,
  qualification: DataTypes.INTEGER,

  sequelize,
  modelName: "MoviesOrSeries",
});

// Pertenece a :
MoviesOrSeries.Character = MoviesOrSeries.belongsTo(Character);

module.exports = MoviesOrSeries;
