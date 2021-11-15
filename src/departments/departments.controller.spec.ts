import { Test, TestingModule } from '@nestjs/testing';
import { SportDepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';

describe('SportDepartmentsController', () => {
  let controller: SportDepartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportDepartmentsController],
      providers: [DepartmentsService],
    }).compile();

    controller = module.get<SportDepartmentsController>(SportDepartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
