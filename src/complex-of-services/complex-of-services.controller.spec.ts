import { Test, TestingModule } from '@nestjs/testing';
import { SportComplexOfServicesController } from './complex-of-services.controller';
import { ComplexOfServicesService } from './complex-of-services.service';

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
