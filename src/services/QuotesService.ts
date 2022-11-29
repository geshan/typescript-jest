import { Service } from 'typedi';
import { Quote } from '../types/Quote';

@Service()
export class QuotesService {

  public getQuotes(): Quote[] {
    return [
      {
        id: 1,
        quote: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
        author: 'Bjarne Stroustrup'
        },
        {
        id: 2,
        quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        author: 'Martin Fowler'
        },
    ];
  }
}
