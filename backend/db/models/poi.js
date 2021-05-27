"use strict";
module.exports = (sequelize, DataTypes) => {
  const POI = sequelize.define(
    "POI",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      placeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Places" },
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
    },
    {}
  );
  POI.associate = function (models) {
    // associations can be defined here
    POI.hasMany(models.NPC, { foreignKey: "userId" });
    POI.hasMany(models.Shop, { foreignKey: "userId" });
  };
  return POI;
};
