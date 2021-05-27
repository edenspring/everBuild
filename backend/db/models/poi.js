'use strict';
module.exports = (sequelize, DataTypes) => {
  const POI = sequelize.define('POI', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  POI.associate = function(models) {
    // associations can be defined here
  };
  return POI;
};