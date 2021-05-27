"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      cost: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      isMagic: {
        allowNUll: false,
        type: DataTypes.BOOLEAN,
      },
      level: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
    },
    {}
  );
  Item.associate = function (models) {
    // associations can be defined here
    Item.belongsTo(models.User, { foreignKey: "userId" });
    Item.belongsToMany(models.Shop, {
      through: "ShopInvetory",
      otherKey: "shopId",
      foreignKey: "itemId",
    });
  };
  return Item;
};
