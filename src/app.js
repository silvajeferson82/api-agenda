import express from 'express';
import general from './routeGeneral';
import cors from 'cors';

import './database';

class App{
  constructor(){
    this.server = express();
    this.server.use(express.json({ limit: '100mb', extended: true }));
    this.server.use(cors());
    // this.routes();

  }
  routes(){
    this.server.use(general);
  }
}

export default new App().server;