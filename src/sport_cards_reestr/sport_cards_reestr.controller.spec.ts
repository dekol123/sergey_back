import { Test, TestingModule } from '@nestjs/testing';
import { SportCardsReestr } from './sport_cards_reestr.controller';
import { RegisterOfCardsService } from './sport_cards_reestr.service';

describe('SportCardsReestr', () => {
  let controller: SportCardsReestr;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportCardsReestr],
      providers: [RegisterOfCardsService],
    }).compile();

    controller = module.get<SportCardsReestr>(SportCardsReestr);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
