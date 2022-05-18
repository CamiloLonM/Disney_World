const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");
const Character = require("./characters");

class MoviesOrSeries extends Model {}
MoviesOrSeries.init(
  {
    tittle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    creationDate: {
      type: DataTypes.DATE,
    },
    qualification: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "MoviesOrSeries",
  }
);

// Pertenece a :
// MoviesOrSeries.Character = MoviesOrSeries.belongsTo(Character);

module.exports = MoviesOrSeries;
