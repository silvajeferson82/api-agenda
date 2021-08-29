import Sequelize from  'sequelize';
import dbConfig from '../config/database';

import Contato from '../models/Contatos';

const models = [ Contato];
class Connection{
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(dbConfig);
   
    models.forEach(model => model.init(this.connection));
  }
}

export default new Connection();