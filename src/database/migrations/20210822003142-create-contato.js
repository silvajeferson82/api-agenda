
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contatos', { 
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
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
        type: Sequelize.STRING,
        allowNull: true,
      },
      peso:{
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      update_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      }

    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('contatos');
     
  }
};