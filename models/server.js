const express = require("express");
const app = require("express");
const Character = require("./characters");
const MoviesOrSeries = require("./moviesOrSeries");
const Gender = require("./gender");
const sequelize = require("../database/db");
const UserRoutes = require("../routes/Users");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/characters";
    //middlewares
    this.middlewares();
    //Ruta App
    this.routes();
  }

  middlewares() {
    //lectura parseo Body
    this.app.use(express.json());
    this.app.use(UserRoutes);
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userPath, require("../routes/Users"));
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
      sequelize.sync().then(() => {
        console.log("Synchronized Tables");
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = Server;
