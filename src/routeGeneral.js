import { Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import Contatos from './controllers/Contatos/routes';

const routes = Router();

const options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: "API do projeto Agenda Empresa",
            version: "1.0.0",
            description: "Projeto com NodeJS, banco SQL(postgres) e swagger",
            license: {
                name:"Licensed Under MIT",
                url:"https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Jeferson Silva",
                email: "jefersonsilva.contato@gmail.com",
            },
        },
        servers: [
            {
              url:"http://localhost:8086",
              description: "Development server",
            }
        ],
    },
    apis:['**/*routes.js'],
};

const specs = swaggerJSDoc(options);
routes.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(specs, { explorer: true })
);



routes.use('/contatos', Contatos);

export default routes;