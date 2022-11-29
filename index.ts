import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Express server built using TypeScript' });
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
