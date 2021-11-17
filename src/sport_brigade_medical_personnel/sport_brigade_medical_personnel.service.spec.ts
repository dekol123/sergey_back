import { Test, TestingModule } from '@nestjs/testing';
import { BrigadeMedicalPersonnelService } from './sport_brigade_medical_personnel.service';

describe('BrigadeMedicalPersonnelService', () => {
  let service: BrigadeMedicalPersonnelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrigadeMedicalPersonnelService],
    }).compile();

    service = module.get<BrigadeMedicalPersonnelService>(BrigadeMedicalPersonnelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
