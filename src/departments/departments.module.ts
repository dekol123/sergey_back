import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { SportDepartmentsController } from './departments.controller';
import { Departments } from './entities/departments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Departments])],
  controllers: [SportDepartmentsController],
  providers: [DepartmentsService]
})
export class DepartmentsModule {}
