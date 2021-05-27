'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    poiId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    npcId: DataTypes.INTEGER
  }, {});
  Shop.associate = function(models) {
    // associations can be defined here
  };
  return Shop;
};