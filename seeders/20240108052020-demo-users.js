"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const saltRounds = 10;

    const usersData = [
      {
        id: 3000,
        name: "U1",
        age: 21,
        password: "123123",
        email: "u1@kitra.abc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3001,
        name: "U2",
        age: 51,
        password: "234234",
        email: "u2@kitra.abc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3002,
        name: "U3",
        age: 31,
        password: "345345",
        email: "u3@kitra.abc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3003,
        name: "U4",
        age: 18,
        password: "456456",
        email: "u4@kitra.abc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3004,
        name: "U5",
        age: 21,
        password: "567567",
        email: "u5@kitra.abc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3005,
        name: "U6",
        age: 35,
        password: "678678",
        email: "u6@kitra.abc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Hash passwords before inserting
    for (const userData of usersData) {
      const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
      userData.password = hashedPassword;
    }

    await queryInterface.bulkInsert("Users", usersData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
