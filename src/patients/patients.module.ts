import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { SportPatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './entities/patients.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Patients])],
  controllers: [SportPatientsController],
  providers: [PatientsService]
})
export class PatientsModule {}
