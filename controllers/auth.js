const { append } = require("express/lib/response");
const jwt = require("jsonwebtoken");

const authGet = async (req, res) => {
  try {
    res.json({
      text: "Api ok!!!",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const authPost = async (req, res) => {
  const user = { id: 3 };
  const token = jwt.sign({ user }, "my_secret_key"); // variables de entorno
  req.json({
    token,
  });
};

// RUTA PROTEGIDA

const getProtected = async (res, req) => {
  // aca llamar el ensuretoken
  // app.post ('/protected', ensureToken, (req,res) => ) como llamarlo

  jwt.verify(req.token, "My_secret_key", (err, data) => {
    if (err) {
      res.sendStatus(403).json({ message: "Token does not exist" });
    } else {
      re.json({
        text: "protected",
        data,
      });
    }
  });
};
function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1]; // número aleatorio
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403).json({ message: error.message });
  }
}

module.exports = {
  authGet,
  authPost,
  getProtected,
};
