import { Test, TestingModule } from '@nestjs/testing';
import { SportBrigadeMedicalPersonnelController } from './sport_brigade_medical_personnel.controller';
import { BrigadeMedicalPersonnelService } from './sport_brigade_medical_personnel.service';

describe('BrigadeMedicalPersonnelController', () => {
  let controller: SportBrigadeMedicalPersonnelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportBrigadeMedicalPersonnelController],
      providers: [BrigadeMedicalPersonnelService],
    }).compile();

    controller = module.get<SportBrigadeMedicalPersonnelController>(SportBrigadeMedicalPersonnelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
