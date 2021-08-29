import Sequelize, { Model, DataTypes} from 'sequelize'; 
 class Contatos extends Model{
   static init(sequelize){
     super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      nome:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      sobrenome:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      cpf:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      nascimento:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      peso:{
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
      {
        sequelize,
        tableName: 'contatos',
      });

      return this;
  }
 }  
module.exports = Contatos;