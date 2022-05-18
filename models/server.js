const express = require("express");
const characters = require("./characters");
const sequelize = require("../database/db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //Ruta App
    //this.routes();
    //middlewares
    // this.middlewares();
  }

  // middlewares() {
  //   //lectura parseo Body
  //   //this.app.use(express.json());
  // }

  //routes(){
  // this.app.use(this.usuariosPath, require())
  //}
  // Force true : DROP TABLES
  async listen() {
    try {
      await sequelize.sync({ force: false });
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = Server;
