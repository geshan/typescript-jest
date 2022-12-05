import { QuotesService } from "../../../src/services/QuotesService";
import { Quote } from "../../../src/types/Quote";

describe('QuotesService', () => {
  let service: QuotesService;
  beforeEach(() => {
    service = new QuotesService();
  });

  it('should define quotes service', () => {
    expect(service).toBeInstanceOf(QuotesService);
  });

  describe('getQuotes', () => {
    it('should get mock fixed quotes', () => {
      const quotes: Quote[] = service.getQuotes(1);
      expect(quotes).toHaveLength(10);
      expect(quotes[0]).toEqual({
        "author": "Bjarne Stroustrup",
        "id": 1,
        "quote": "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
      });
    });

    it('should get mock fixed quotes for page > 1', () => {
      const quotes: Quote[] = service.getQuotes(2);
      expect(quotes).toHaveLength(7);
    });

    it('should throw error for page number less than 0', () => {
      expect(() => {
        service.getQuotes(-1);
      }).toThrow('Page number should be 1 or more');
    });
  });
});
