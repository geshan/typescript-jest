import express, { Request, Response } from 'express';
import { QuotesController } from './src/controllers/QuotesController';
import { Container } from 'typedi';

class App {
 public express: express.Application;

 public constructor(public quotesController: QuotesController) {
    this.express = express();
    this.routes();    
  }

  private routes(): void {   	
    this.express.get('/', (req: Request, res: Response) => {
      res.send({ message: 'Express server built using TypeScript' });
    });

    this.express.get('/api/quotes', (req: Request, res: Response) => {
      res.send({ data: this.quotesController.getQuotes(Number(req.query.page) || 1) });
    });
  }
}

export default new App(Container.get(QuotesController)).express;
