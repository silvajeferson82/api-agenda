 
 module.exports = function(sequelize, Model, DataTypes){
   return sequelize.define(
    'contatos',{
      nome:{ 
        types:DataTypes.STRING,
      },
      sobrenome:{
        types: DataTypes.STRING,
      },
      cpf: {
        types:DataTypes.STRING,
      },
      nascimento: {
        type:DataTypes.DATE
      },
      peso:{
        type: DataTypes.DECIMAL,
      }
    },{
      tableName: 'contatos'
    });
  }
// export default new Contatos;