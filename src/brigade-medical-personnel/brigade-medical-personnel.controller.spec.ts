import { Test, TestingModule } from '@nestjs/testing';
import { SportBrigadeMedicalPersonnelController } from './brigade-medical-personnel.controller';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';

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
