'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      photo_id: {
        type: Sequelize.INTEGER
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
      queryInterface.addConstraint("Comments", {
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
      queryInterface.addConstraint("Comments", {
        fields : ["photo_id"],
        type : 'foreign key',
        name : 'photo_fk',
        references : {
          table : 'Photos',
          field : 'id'
        },
        onDelete : 'cascade',
        onUpdate : 'cascade'
      })
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments')
    .then(() => 
      queryInterface.removeConstraint('Comments', 'user_fk'))
    .then(() => queryInterface.removeConstraint('Comments', 'photo_fk'))
  }
};