import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Departments } from './entities/sport_departments.entity';

@Injectable()
export class Sport_departmentsService extends TypeOrmCrudService<Departments>{
  constructor(@InjectRepository(Departments) repo) {
    super(repo)
  }
}
