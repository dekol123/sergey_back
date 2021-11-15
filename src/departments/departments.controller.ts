import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { DepartmentsService } from './departments.service';
import { Departments } from './entities/departments.entity';

@Crud({
  model: {
    type: Departments
  }
})

@ApiTags('Sport departments')
@Controller('sport-departments')
export class SportDepartmentsController implements CrudController<Departments>{
  constructor(public service: DepartmentsService) {}  
}
