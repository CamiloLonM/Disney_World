const express = require("express");
const Character = require("./characters");
const MoviesOrSeries = require("./moviesOrSeries");
const sequelize = require("../database/db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //Ruta App
    this.routes();
    //middlewares
    this.middlewares();
  }

  middlewares() {
    this.app.use(require("../routes/User"));
    //lectura parseo Body
    this.app.use(express.json());
  }

  routes() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  }
  // Force true : DROP TABLES
  async listen() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      MoviesOrSeries.belongsToMany(Character, {
        through: "Character_MoviesOrSeries",
      });
      Character.belongsToMany(MoviesOrSeries, {
        through: "Character_MoviesOrSeries",
      });
      sequelize.sync();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = Server;
