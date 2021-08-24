'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contatos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      nascimento:{
        type: Sequelize.DATE,
        allowNull: true,
      },
      peso:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: true
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }

    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('contatos');
     
  }
};