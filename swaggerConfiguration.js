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
        url: `http://localhost:${config.port}/`,
        description:
          "This url is to test in localhost.",
      }
    ],
  },
  apis: ["./docs/*.js"],
};
module.exports = swaggerSpec;
