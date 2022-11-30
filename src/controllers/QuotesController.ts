import { Service } from 'typedi';
import { QuotesService } from '../services/QuotesService';
import { Quote } from '../types/Quote';

@Service()
export class QuotesController {
  private quotesService: QuotesService;

  public constructor(quotesService: QuotesService) {
    this.quotesService = quotesService;
  }
  
  public getQuotes(page: number = 1): Quote[] {
    return this.quotesService.getQuotes(page);
  }
}
