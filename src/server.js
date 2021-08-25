import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3031, () => {
  console.log('Servidor rodando em 3031.');
});


