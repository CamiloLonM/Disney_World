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
  creation_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [0, 50] },
  },
  qualification: {
    type: DataTypes.ENUM("1", "2", "3", "4", "5"),
    allowNull: true,
  },
});

module.exports = MoviesOrSeries;
