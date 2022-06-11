import "dotenv/config";
import express from 'express';
import helmet from 'helmet';

import routes from './routes'

const app = express();
app.disable("x-powered-by");
app.use(helmet.hidePoweredBy());

app.use(express.json());

app.use('/api/v1/', routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
