import { Module } from '@nestjs/common';
import { Sport_departmentsService } from './sport_departments.service';
import { SportDepartmentsController } from './sport_departments.controller';
import { Departments } from './entities/sport_departments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Departments])],
  controllers: [SportDepartmentsController],
  providers: [Sport_departmentsService]
})
export class DepartmentsModule {}
