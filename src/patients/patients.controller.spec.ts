import { Test, TestingModule } from '@nestjs/testing';
import { SportPatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

describe('SportPatientsController', () => {
  let controller: SportPatientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportPatientsController],
      providers: [PatientsService],
    }).compile();

    controller = module.get<SportPatientsController>(SportPatientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
