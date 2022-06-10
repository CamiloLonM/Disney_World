const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = "jsonwebtoken";
const authConfig = require("../config/auth");

module.exports = {
  // Login
  login(req, res) {
    const { email, password } = req.body;

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
            const token = jwt.sign({ user: user }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });

            res.json({
              user: user,
              token: token,
            });
          } else {
            // Unauthorized Access
            res.status(401).json({ msg: "Invalid password" });
          }
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // Regristro
  register(req, res) {
    // Encriptar Contraseña
    const password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );

    // Crear Usuario
    User.create({
      name: req.body.name,
      email: req.body.email,
      password,
    })
      .then((user) => {
        const token = token.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });

        res.json({
          user,
          token,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
