import { QuotesController } from "../../../src/controllers/QuotesController";
import { QuotesService } from '../../../src/services/QuotesService';

describe('QuotesController', () => {
  let controller: QuotesController;

  const mockQuotesService = {
    getQuotes: jest.fn()
  } as QuotesService;
  beforeEach(async () => {
    controller = new QuotesController(mockQuotesService);
    jest.clearAllMocks();
  });

  it('should define quotes controller', () => {
    expect(controller).toBeDefined();
  });

  describe('getQuotes', () => {
    it('should get quotes', () => {
      mockQuotesService.getQuotes = jest.fn().mockReturnValueOnce([
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
      ]);

      const quotes = controller.getQuotes();
      expect(quotes).toHaveLength(2);
      expect(quotes[0].author).toBe('Bjarne Stroustrup')
      expect(quotes[1].quote).toEqual(expect.stringContaining('Any fool can write code that'));
      expect(quotes[1]).toEqual(expect.objectContaining({
        id: 2
      }));
      expect(quotes[1]).toEqual({
        id: 2,
        quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        author: 'Martin Fowler'
      });

      expect(mockQuotesService.getQuotes).toHaveBeenCalledTimes(1);
      expect(mockQuotesService.getQuotes).toHaveBeenCalledWith(1);

    });
  });
});
