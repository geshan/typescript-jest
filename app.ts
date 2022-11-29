import express, { Request, Response } from 'express';
import * as bodyParser from "body-parser";

class App {
 public express: express.Application;

 public constructor() {
    this.express = express();
    this.middleware();
    this.routes();    
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {   	
    this.express.get('/', (req: Request, res: Response) => {
      res.send({ message: 'Express server built using TypeScript' });
    });
  }
}

export default new App().express;
