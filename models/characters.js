const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

//Personajes

const Character = sequelize.define("Character", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [0, 300] },
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: { len: [0, 50] },
  },
  creation_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  history: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: { len: [0, 200] },
  },
});

module.exports = Character;
