const { Sequelize } = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    dialect: "mysql",
    query: {
      raw: true,
    },
  }
);

module.exports = sequelize;
