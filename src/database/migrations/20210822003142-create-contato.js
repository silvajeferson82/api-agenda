
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contatos', { 
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      sobrenome:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      nascimento:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      peso:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: true,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('contatos');
  }
};