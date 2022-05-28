const config = require('./config');

const swaggerSpec = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Api Disney_World.",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${config.port}/characters`,
        description:
          "This endpoint handles the related information of the Characters.",
      },
      {
        url: `http://localhost:${config.port}/movies`,
        description:
          "This endpoint handles the related information of the MoviesOrSerie.",
      },
    ],
  },
  apis: ["./docs/*.js"],
};
module.exports = swaggerSpec;
