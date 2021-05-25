"use strict";
module.exports = (sequelize, DataTypes) => {
  const Land = sequelize.define(
    "Land",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Land.associate = function (models) {
    // associations can be defined here
    Land.belongsTo(models.User, { foreignKey: "userId" });

    Land.hasMany(models.Place, { foreignKey: "landId" });
  };

  Land.createNew = async function ({ name, description, userId }) {
    const land = await Land.create({
      name,
      description,
      userId,
    });

    return await Land.findByPk(land.id);
  };

  return Land;
};
