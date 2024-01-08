"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Treasure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Treasure.hasMany(models.MoneyValue, { foreignKey: "TreasureId" });
    }
  }
  Treasure.init(
    {
      Latitude: DataTypes.FLOAT,
      Longitude: DataTypes.FLOAT,
      Name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Treasure",
    }
  );
  return Treasure;
};
