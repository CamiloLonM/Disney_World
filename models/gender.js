const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Gender = sequelize.define("Gender", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: { len: [0, 50] },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [0, 300] },
  },
});

module.exports = Gender;
