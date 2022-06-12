import 'dotenv/config';
import 'module-alias/register';
import 'reflect-metadata';

import express from 'express';
import helmet from 'helmet';

import routes from './routes';

const PORT = process.env.NODE_ENV === 'test' ? 3334 : process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');
app.use(helmet.hidePoweredBy());

app.use(express.json());

app.use('/api/v1/', routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${ PORT }`);
});

export default app;
