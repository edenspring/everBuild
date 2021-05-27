'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    landId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "landId" },
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" },
    },
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
    Place.belongsTo(models.User, {foreignKey : 'userId'})
    Place.belongsTo(models.Land, {foreignKey : 'landId'})
  };

  Place.createNew = async function ({ name, description, landId, userId }) {
    const place = await Place.create({
      name,
      description,
      landId,
      userId,
    });

    return await Place.findByPk(place.id);
  };

  return Place;
};
