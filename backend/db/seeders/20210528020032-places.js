"use strict";

const faker = require("faker");

const places = [...Array(30)].map((land) => ({
  name: faker.address.cityName(),
  description: faker.lorem.paragraph(),
  userId: 1,
  landId: Math.ceil(Math.random()*6),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Places", places, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Places", null, {});
  },
};
