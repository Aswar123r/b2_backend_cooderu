'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      caption: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      user_id: {
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
    }).then(() => {
      queryInterface.addConstraint("Photos", {
        fields : ["user_id"],
        type : 'foreign key',
        name : 'user_fk',
        references : {
          table : 'Users',
          field : 'id'
        },
        onDelete : 'cascade',
        onUpdate : 'cascade'
      });
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Photos')
    .then(() => 
      queryInterface.removeConstraint('Comments', 'user_fk'))
  }
};