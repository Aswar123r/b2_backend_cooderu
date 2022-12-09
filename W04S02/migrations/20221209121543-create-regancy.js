'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Regancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      province_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Provinces',
          key : 'id'
        },
        onUpdate : 'cascade',
        onDelete : 'cascade'
      },
      name: {
        type: Sequelize.STRING
      },
      alt_name: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.INTEGER
      },
      longitude: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Regancies');
  }
};