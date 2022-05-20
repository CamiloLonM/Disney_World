const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const MoviesOrSeries = sequelize.define("MoviesOrSeries", {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [0, 50] },
  },
  qualification: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = MoviesOrSeries;
