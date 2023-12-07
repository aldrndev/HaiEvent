'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type1: {
        type: Sequelize.STRING,
      },
      stock1: {
        type: Sequelize.INTEGER,
      },
      price1: {
        type: Sequelize.INTEGER,
      },
      type2: {
        type: Sequelize.STRING,
      },
      stock2: {
        type: Sequelize.INTEGER,
      },
      price2: {
        type: Sequelize.INTEGER,
      },
      type3: {
        type: Sequelize.STRING,
      },
      stock3: {
        type: Sequelize.INTEGER,
      },
      price3: {
        type: Sequelize.INTEGER,
      },
      EventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  },
};
