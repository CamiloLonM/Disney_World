const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");

//Personajes
class Character extends Model {}
Character.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: DataTypes.image,
  weights: DataTypes.NUMBER,
  age: {
    type: DataTypes.NUMBER,
  },
  History: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Associated: {
    movies: DataTypes.STRING,
    Orseries: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,
  modelName: "Character",
});

module.exports = Character;
