'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShopInventory = sequelize.define('ShopInventory', {
    itemId: DataTypes.INTEGER,
    shopId: DataTypes.INTEGER
  }, {});
  ShopInventory.associate = function(models) {
    // associations can be defined here
  };
  return ShopInventory;
};