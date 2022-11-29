import { Service } from 'typedi';
import { QuotesService } from '../services/QuotesService';
import { Quote } from '../types/Quote';

@Service()
export class QuotesController {
  private quotesService: QuotesService;

  public constructor(quotesService: QuotesService) {
    this.quotesService = quotesService;
  }
  
  public getQuotes(): Quote[] {
    return this.quotesService.getQuotes();
  }
}
