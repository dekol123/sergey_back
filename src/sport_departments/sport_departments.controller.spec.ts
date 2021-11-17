import { Test, TestingModule } from '@nestjs/testing';
import { SportDepartmentsController } from './sport_departments.controller';
import { Sport_departmentsService } from './sport_departments.service';

describe('SportDepartmentsController', () => {
  let controller: SportDepartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportDepartmentsController],
      providers: [Sport_departmentsService],
    }).compile();

    controller = module.get<SportDepartmentsController>(SportDepartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
