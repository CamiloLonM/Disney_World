const express = require("express");

const sequelize = require("../database/db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
  }

  async listen() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
    //sequelize
    //  .authenticate()
    //  .then(() => {
    //    console.log("Connection has been established successfully.");
    // })
    //  .catch((error) => {
    //   console.error("Unable to connect to the database:", error);
    // });
  }
}

module.exports = Server;
