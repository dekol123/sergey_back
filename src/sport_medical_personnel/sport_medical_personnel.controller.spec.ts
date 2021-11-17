import { Test, TestingModule } from '@nestjs/testing';
import { SportMedicalPersonnelController } from './sport_medical_personnel.controller';
import { Sport_medical_personnelService } from './sport_medical_personnel.service';

describe('SportMedicalPersonnelController', () => {
  let controller: SportMedicalPersonnelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportMedicalPersonnelController],
      providers: [Sport_medical_personnelService],
    }).compile();

    controller = module.get<SportMedicalPersonnelController>(SportMedicalPersonnelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
