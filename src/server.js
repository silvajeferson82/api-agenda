// import express from 'express';
// import routes from './routes';

// import './database';

// const app = express();

// app.use(express.json());
// app.use(routes);

import app from './app';

app.listen(8086, () => {
  console.log('Servidor rodando em 8086.');
});


