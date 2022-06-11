const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

// user

const User = sequelize.define("User", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "The name can only contain letters",
      },
      len: {
        args: [2, 200],
        msg: "The name must be a minimum of two characters",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "The email must be a valid email",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6, 200],
        msg: "The password must have at least 6 characters",
      },
    },
  },
});

module.exports = User;
