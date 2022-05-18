// Controlador de ruta via acceso
const express = require("express");
const Character = require("../models/characters");
const app = express();
const { Router } = require("express");

const router = Router();
router.post("/characters", (req, res) => {
  console.log(req.body);
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

module.exports = router;
