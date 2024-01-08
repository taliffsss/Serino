"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here if any
    }

    // Method to compare hashed password for login
    async comparePassword(password) {
      return await bcrypt.compare(password, this.Password);
    }
  }

  User.init(
    {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        // Hook to hash the password before saving to the database
        beforeCreate: async (user) => {
          const hashedPassword = await bcrypt.hash(user.Password, 10);
          user.Password = hashedPassword;
        },
      },
    }
  );

  return User;
};
