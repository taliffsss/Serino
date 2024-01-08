"use strict";

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
    await queryInterface.bulkInsert(
      "MoneyValues",
      [
        {
          TreasureId: 100,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 101,
          Amount: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 102,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 103,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 104,
          Amount: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 105,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 106,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 107,
          Amount: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 108,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 109,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 110,
          Amount: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 111,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 112,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 113,
          Amount: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 114,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 115,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 116,
          Amount: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 117,
          Amount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 100,
          Amount: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 101,
          Amount: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 102,
          Amount: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 103,
          Amount: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 107,
          Amount: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 108,
          Amount: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TreasureId: 109,
          Amount: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("MoneyValues", null, {});
  },
};
