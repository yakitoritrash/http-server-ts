import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Hello listening on port: ${port}`);
})

