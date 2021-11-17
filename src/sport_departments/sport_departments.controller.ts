import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Sport_departmentsService } from './sport_departments.service';
import { Departments } from './entities/sport_departments.entity';

@Crud({
  model: {
    type: Departments
  }
})

@ApiTags('Sport sport_departments')
@Controller('sport_departments')
export class SportDepartmentsController implements CrudController<Departments>{
  constructor(public service: Sport_departmentsService) {}
}
