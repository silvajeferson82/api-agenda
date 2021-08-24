import Sequelize from  'sequelize';
import dbConfig from '../config/database';

import Contatos from '../models/Contatos';

class Database{
  init(){

    this.connection = new Sequelize(dbConfig);
    
    Contatos.init(connection);
  }
}

export default new Database();