import { Router } from 'express';
import ContatosController from './controllers/ContatosController';

const routes = Router();

routes.get('/teste', (req, res)=>{
  return res.send("Teste de Rota...")
});

routes.post('/create', ContatosController.store);

routes.get('/contatos', ContatosController.show);


export default routes;