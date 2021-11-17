import { Test, TestingModule } from '@nestjs/testing';
import { SportComplexOfServicesController } from './sport_complex_of_services.controller';
import { ComplexOfServicesService } from './sport_complex_of_services.service';

describe('SportComplexOfServicesController', () => {
  let controller: SportComplexOfServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportComplexOfServicesController],
      providers: [ComplexOfServicesService],
    }).compile();

    controller = module.get<SportComplexOfServicesController>(SportComplexOfServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
