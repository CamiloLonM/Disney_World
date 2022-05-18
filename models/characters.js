const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");

//Personajes
class Character extends Model {}
Character.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: DataTypes.BLOB,
    weights: DataTypes.DECIMAL,
    age: {
      type: DataTypes.INTEGER,
    },
    History: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Associated: {
      movies: DataTypes.STRING,
      Orseries: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Character",
  }
);

module.exports = Character;
