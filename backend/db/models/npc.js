'use strict';
module.exports = (sequelize, DataTypes) => {
  const NPC = sequelize.define('NPC', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    poiId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  NPC.associate = function(models) {
    // associations can be defined here
  };
  return NPC;
};