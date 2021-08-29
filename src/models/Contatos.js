import { Model, DataTypes} from 'sequelize' 
 class Contatos extends Model{
   static init(sequelize){
     super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
      },
      nome:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      sobrenome:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      nascimento:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      peso:{
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        // defaultValue: DataTypes.NOW,
      },
      update_at:{
        type: DataTypes.DATE,
        allowNull: false,
        // defaultValue: DataTypes.NOW,
      }
    },
      {
        sequelize,
        tableName: 'contatos',
      });

      // return this;
  }
 }  
module.exports = Contatos;