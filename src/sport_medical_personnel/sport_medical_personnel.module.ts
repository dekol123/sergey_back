import { Module } from '@nestjs/common';
import { Sport_medical_personnelService } from './sport_medical_personnel.service';
import { SportMedicalPersonnelController } from './sport_medical_personnel.controller';
import { MedicalPersonnel } from './entities/sport_medical_personnel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([MedicalPersonnel])],
  controllers: [SportMedicalPersonnelController],
  providers: [Sport_medical_personnelService]
})
export class MedicalPersonnelModule {}
