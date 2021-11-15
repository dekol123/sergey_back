import { Test, TestingModule } from '@nestjs/testing';
import { SportMedicalPersonnelController } from './medical-personnel.controller';
import { MedicalPersonnelService } from './medical-personnel.service';

describe('SportMedicalPersonnelController', () => {
  let controller: SportMedicalPersonnelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportMedicalPersonnelController],
      providers: [MedicalPersonnelService],
    }).compile();

    controller = module.get<SportMedicalPersonnelController>(SportMedicalPersonnelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
