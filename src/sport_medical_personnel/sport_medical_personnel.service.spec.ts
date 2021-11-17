import { Test, TestingModule } from '@nestjs/testing';
import { Sport_medical_personnelService } from './sport_medical_personnel.service';

describe('MedicalPersonnelService', () => {
  let service: Sport_medical_personnelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Sport_medical_personnelService],
    }).compile();

    service = module.get<Sport_medical_personnelService>(Sport_medical_personnelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
