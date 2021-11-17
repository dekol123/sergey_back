import { Test, TestingModule } from '@nestjs/testing';
import { Sport_departmentsService } from './sport_departments.service';

describe('DepartmentsService', () => {
  let service: Sport_departmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Sport_departmentsService],
    }).compile();

    service = module.get<Sport_departmentsService>(Sport_departmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
