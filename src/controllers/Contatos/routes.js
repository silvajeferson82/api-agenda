import { Router } from 'express';
import ContatosController from './ContatosController';

const routes = Router();

/**
 * @swagger
 * /contatos/listar:
 *   get:
 *     tags: 
 *     - Contatos
 *     summary: Retorna o JSON listando os colaboradores.
 *     description: Listagem de Colaboradores cadastrados.
 *     responses:
 *       200:
 *         description: Listagem dos colaboradores.
 *         content: 
 *           application/json:
 *             schema:
 *               type: Object
 *               properties:
 *                 id: 
 *                   type: string
 *                   description: Id do Colaboradores.
 *                   example: "e901d927-0068-467a-ba87-506fdf4375f5"
 *                 nome:
 *                   type: string
 *                   description: Primeiro nome do Colaborador.
 *                   example: "Fulano"
 *                 sobrenome:
 *                   type: string
 *                   description: Segundo nome do Colaborador.
 *                   example: "e901d927-0068-467a-ba87-506fdf4375f5"
 *                 cpf:
 *                   type: string
 *                   description: CPF do Colaborador.
 *                   example: "71492027057"
 *                 peso:
 *                   type: string
 *                   description: Peso do Colaborador.
 *                   example: "90.7"
 */

routes.get('/teste', (req, res)=>{
  return res.send("Teste de Rota...")
});

routes.post('/create', ContatosController.store);

routes.get('/listar', ContatosController.show);


export default routes;