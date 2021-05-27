'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShopInventory = sequelize.define('ShopInventory', {
    itemId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Items" },
    },
    shopId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Shops" },
    },
  }, {});
  ShopInventory.associate = function(models) {
    // associations can be defined here
  };
  return ShopInventory;
};
