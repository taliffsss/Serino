"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MoneyValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MoneyValue.belongsTo(models.Treasure, { foreignKey: "TreasureId" }); // Define association with Treasure
    }
  }
  MoneyValue.init(
    {
      TreasureId: DataTypes.INTEGER,
      Amount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "MoneyValue",
    }
  );
  return MoneyValue;
};
