import { Test, TestingModule } from '@nestjs/testing';
import { SportController } from './sport_brigade.controller';
import { BrigadeService } from './sport_brigade.service';

describe('BrigadeController', () => {
  let controller: SportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportController],
      providers: [BrigadeService],
    }).compile();

    controller = module.get<SportController>(SportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
