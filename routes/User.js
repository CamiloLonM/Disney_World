// Controlador de ruta via acceso
const { Router } = require("express");
const { append } = require("express/lib/response");
const { upsert } = require("../models/characters");

const Character = require("../models/characters");

app.get("/", (req, res) => {
  Character.create({
    name: "Goofy",
    // image:// para agregar la imagen NO SE xD
    weights: 54,
    age: 92,
    History:
      "conocido como Tribilín es un personaje de ficción creado por Walt Disney. Es uno de los mejores amigos de Mickey Mouse.",
    creationDate: new Date(1932, 04, 25),
    Associated: "Mickey descubre la Navidad, Goofy: La película",
  }).then((Character) => {
    res.json(Character);
  });
});

const router = Router();

module.exports = router;
