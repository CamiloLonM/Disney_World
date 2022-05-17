const express = require("express");

const sequelize = require("../database/db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //Ruta App
    //this.routes();
  }

  //middlewares() {
  //lectura y parseo del body
  //this.app(express.json());
  //}

  //routes(){
  // this.app.use(this.usuariosPath, require())
  //}

  async listen() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = Server;
