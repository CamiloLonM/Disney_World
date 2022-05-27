const swaggerSpec = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Api Disney_World.",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001/characters",
        description:
          "This endpoint handles the related information of the Characters.",
      },
      {
        url: "http://localhost:3001/movies",
        description:
          "This endpoint handles the related information of the MoviesOrSerie.",
      },
    ],
  },
  //apis: [`${path.join(__dirname, "./routes/*.js")}`], // O ./routes/characters.js +++++++
  //apis: [`${path.join("./docs/*.js")}`],
  apis: ["/docs/*.js"],
};
module.exports = swaggerSpec;
