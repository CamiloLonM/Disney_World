const express = require("express");
const app = require("express");
const Character = require("./character");
const MoviesOrSeries = require("./moviesOrSerie");
const Gender = require("./gender");
const sequelize = require("../database/db");
const CharacterRoutes = require("../routes/characters");
const MoviesOrSerieRoutes = require("../routes/moviesOrseries");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.characterPath = "/characters";
    this.moviesOrSeriePath = "/movies";

    //middlewares
    this.middlewares();
    //Ruta App
    this.routes();
  }

  middlewares() {
    //lectura parseo Body
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.characterPath, require("../routes/characters"));
    this.app.use(this.moviesOrSeriePath, require("../routes/moviesOrseries"));
  }

  async listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");

      // Many Many
      MoviesOrSeries.belongsToMany(Character, {
        through: "Character_MoviesOrSeries",
      });
      Character.belongsToMany(MoviesOrSeries, {
        through: "Character_MoviesOrSeries",
      });
      MoviesOrSeries.belongsToMany(Gender, {
        through: "MoviesOrSeries_Gender",
      });
      Gender.belongsToMany(MoviesOrSeries, {
        through: "MoviesOrSeries_Gender",
      });
      sequelize.sync({ alter: true }).then(() => {
        console.log("Synchronized Tables");
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = Server;
