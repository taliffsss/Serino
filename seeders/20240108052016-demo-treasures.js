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
      "Treasures",
      [
        {
          id: 100,
          Latitude: 14.54376481,
          Longitude: 121.0199117,
          Name: "T1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 101,
          Latitude: 14.55320766,
          Longitude: 121.0557745,
          Name: "T2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 102,
          Latitude: 14.54464357,
          Longitude: 121.0203656,
          Name: "T3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 103,
          Latitude: 14.58726159,
          Longitude: 120.9795048,
          Name: "T4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 104,
          Latitude: 14.57320327,
          Longitude: 121.0230904,
          Name: "T5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 105,
          Latitude: 14.52311313,
          Longitude: 121.0194573,
          Name: "T6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 106,
          Latitude: 14.60242292,
          Longitude: 121.0115134,
          Name: "T7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 107,
          Latitude: 14.60857463,
          Longitude: 121.0185514,
          Name: "T8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 108,
          Latitude: 14.49111434,
          Longitude: 121.0437482,
          Name: "T9",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 109,
          Latitude: 14.54455953,
          Longitude: 121.1060883,
          Name: "T10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 110,
          Latitude: 14.58798141,
          Longitude: 121.058208,
          Name: "T11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 111,
          Latitude: 14.54886493,
          Longitude: 121.0336393,
          Name: "T12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 112,
          Latitude: 14.53715059,
          Longitude: 120.9904302,
          Name: "T13",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 113,
          Latitude: 14.52579666,
          Longitude: 121.0208688,
          Name: "T14",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 114,
          Latitude: 14.51709988,
          Longitude: 120.9810021,
          Name: "T15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 115,
          Latitude: 14.50200687,
          Longitude: 120.9916181,
          Name: "T16",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 116,
          Latitude: 14.52112441,
          Longitude: 121.0427714,
          Name: "T17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 117,
          Latitude: 14.47720766,
          Longitude: 120.9867927,
          Name: "T18",
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
    await queryInterface.bulkDelete("Treasures", null, {});
  },
};
