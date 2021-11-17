import { Test, TestingModule } from '@nestjs/testing';
import { SportArrivals } from './sport_arrivals.controller';
import { ArrivalsService } from './sport_arrivals.service';

describe('ArrivalsController', () => {
  let controller: SportArrivals;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportArrivals],
      providers: [ArrivalsService],
    }).compile();

    controller = module.get<SportArrivals>(SportArrivals);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
