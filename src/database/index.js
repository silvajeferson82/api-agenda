import Sequelize from  'sequelize';
import dbConfig from '../config/database';

import Contato from '../models/Contatos';

class Connection{
  init(){
    this.connection = new Sequelize(dbConfig);
   
    Contato.init(connection);
  }
}

export default new Connection();