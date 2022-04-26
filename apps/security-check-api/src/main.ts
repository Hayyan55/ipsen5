/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { ApiTestResponse, API_URL } from '@ipsen5/security-check-api-interface';

const app = express();

app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to security-check-api!' } as ApiTestResponse);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
