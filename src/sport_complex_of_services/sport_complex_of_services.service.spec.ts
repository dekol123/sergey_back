import { Test, TestingModule } from '@nestjs/testing';
import { ComplexOfServicesService } from './sport_complex_of_services.service';

describe('ComplexOfServicesService', () => {
  let service: ComplexOfServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplexOfServicesService],
    }).compile();

    service = module.get<ComplexOfServicesService>(ComplexOfServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
