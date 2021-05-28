"use strict";
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define(
    "Shop",
    {
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
      npcId: {
        type: DataTypes.INTEGER,
        references: { model: "NPCs" },
      },
    },
    {}
  );
  Shop.associate = function (models) {
    Shop.belongsTo(models.User, { foreignKey: "userId" });
    Shop.belongsTo(models.NPC, { foreignKey: "npcId" });
    Shop.belongsToMany(models.Item, {
      through: "ShopInventory",
      otherKey: "itemId",
      foreignKey: "shopId"
    })
    // associations can be defined here
  };
  return Shop;
};
