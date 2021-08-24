import express from 'express';
import ContatosController from './controllers/ContatosController';

const routes = express.Router();

routes.post('/contatos', ContatosController.store);



export default routes;