import { Test, TestingModule } from '@nestjs/testing';
import { SportCardController } from './cards.controller';
import { CardsService } from './cards.service';

describe('SportCardController', () => {
  let controller: SportCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportCardController],
      providers: [CardsService],
    }).compile();

    controller = module.get<SportCardController>(SportCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
