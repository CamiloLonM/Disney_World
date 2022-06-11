const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = {
  // Login
  login(req, res) {
    let { email, password } = req.body;

    // Buscar usuario
    User.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(404).json({ msg: "User with this email not found" });
        } else {
          if (bcrypt.compareSync(password, user.password)) {
            // Creamos el token
            let token = jwt.sign({ user: user }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });

            res.json({
              user: user,
              token: token,
            });
          } else {
            // Unauthorized Access
            res.status(401).json({ msg: "Incorrect password" });
          }
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // Registro
  register(req, res) {
    // Validacion de contraseña
    if (req.body.password.length < 6) {
      return res
        .status(401)
        .json({ msg: "The password must be greater than 6" });
    }
    // Encriptamos la contraseña
    let password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds) // se le puede añadir un  +   o con la propiedad Numbers
    );

    // Crear un usuario
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: password,
    })
      .then((user) => {
        // Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });

        res.json({
          user: user,
          token: token,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
