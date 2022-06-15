const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const autConfig = require("../config/auth");

// Proteger las rutas

module.exports = (req, res, next) => {
  console.log(req.headers);

  // Comprobar la existencia del token
  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Unauthorized access" });
  } else {
    // comprobar Valides del token
    const token = req.headers.authorization.split(" ")[1];

    // comprobar token
    jwt.verify(token, autConfig.secret, (err, decoded) => {
      if (err) {
        res.status(500).json({ mesg: "Error validating touch", err });
      } else {
        req.user = decoded;

        //console.log(decoded);  // payload de el registro sign ---- user:user
        next();
      }
    });
  }
};
