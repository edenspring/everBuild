'use strict';
module.exports = (sequelize, DataTypes) => {
  const NPC = sequelize.define('NPC', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    poiId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "POIs" },
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" },
    },
  }, {});
  NPC.associate = function(models) {
    // associations can be defined here
    NPC.belongsTo(models.User, { foreignKey: 'userId '});
    NPC.belongsTo(models.POI, {foreignKey: 'poiId' })
  };
  return NPC;
};
