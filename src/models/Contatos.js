import { Model, DataTypes} from 'sequelize';

class Contatos extends Model{
  static init(sequelize){
    super.init({
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      nascimento: DataTypes.DATE,
      peso: DataTypes.DECIMAL,
    },{
      sequelize
    })
  }
}

export default Contatos;