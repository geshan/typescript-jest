import { QuotesService } from "../../../src/services/QuotesService";

describe('QuotesService', () => {
  let service: QuotesService;
  beforeEach(async () => {
    service = new QuotesService();
    jest.clearAllMocks();
  });

  it('should define quotes service', () => {
    expect(service).toBeDefined();
  });

  describe('getQuotes', () => {
    it('should get mock fixed quotes', () => {
      const quotes = service.getQuotes();
      expect(quotes).toHaveLength(2);
    });
  });
});
