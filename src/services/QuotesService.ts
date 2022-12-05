import { Service } from 'typedi';
import { Quote } from '../types/Quote';

@Service()
export class QuotesService {

  public getQuotes(page: number): Quote[] {

    if (page < 1) {
      throw new Error('Page number should be 1 or more');
    }

    const quotes:Quote[] =  [
      {
        id: 1,
        quote: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
        author: 'Bjarne Stroustrup',
      },
      {
        id: 2,
        quote:
          'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        author: 'Martin Fowler',
      },
      {
        id: 3,
        quote: 'First, solve the problem. Then, write the code.',
        author: 'John Johnson',
      },
      {
        id: 4,
        quote: 'Java is to JavaScript what car is to Carpet.',
        author: 'Chris Heilmann',
      },
      {
        id: 5,
        quote:
          'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
        author: 'John Woods',
      },
      {
        id: 6,
        quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
        author: 'Kent Beck',
      },
      {
        id: 7,
        quote: 'Truth can only be found in one place: the code.',
        author: 'Robert C. Martin',
      },
      {
        id: 8,
        quote:
          'If you have to spend effort looking at a fragment of code and figuring out what it\'s doing, then you should extract it into a function and name the function after the "what".',
        author: 'Martin Fowler',
      },
      {
        id: 9,
        quote:
          'The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times; premature optimization is the root of all evil (or at least most of it) in programming.',
        author: 'Donald Knuth',
      },
      {
        id: 10,
        quote:
          'SQL, Lisp, and Haskell are the only programming languages that I’ve seen where one spends more time thinking than typing.',
        author: 'Philip Greenspun',
      },
      {
        id: 11,
        quote: 'Deleted code is debugged code.',
        author: 'Jeff Sickel',
      },
      {
        id: 12,
        quote:
          'There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies and the other way is to make it so complicated that there are no obvious deficiencies.',
        author: 'C.A.R. Hoare',
      },
      {
        id: 13,
        quote: 'Simplicity is prerequisite for reliability.',
        author: 'Edsger W. Dijkstra',
      },
      {
        id: 14,
        quote: 'There are only two hard things in Computer Science: cache invalidation and naming things.',
        author: 'Phil Karlton',
      },
      {
        id: 15,
        quote:
          'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
        author: 'Bill Gates',
      },
      {
        id: 16,
        quote: 'Controlling complexity is the essence of computer programming.',
        author: 'Brian Kernighan',
      },
      {
        id: 17,
        quote: 'The only way to learn a new programming language is by writing programs in it.',
        author: 'Dennis Ritchie',
      },
    ];

    const itemsPerPage:number = 10;
    const end:number = page * itemsPerPage;
    let start:number = 0;
    if(page > 1) {
      start = (page - 1) * itemsPerPage;
    }

    return quotes.slice(start , end);
  }
}
