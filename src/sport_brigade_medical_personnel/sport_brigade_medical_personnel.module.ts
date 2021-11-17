import { Module } from '@nestjs/common';
import { BrigadeMedicalPersonnelService } from './sport_brigade_medical_personnel.service';
import { SportBrigadeMedicalPersonnelController } from './sport_brigade_medical_personnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrigadeMedicalPersonnel } from './entities/sport_brigade_medical_personnel.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BrigadeMedicalPersonnel])],
  controllers: [SportBrigadeMedicalPersonnelController],
  providers: [BrigadeMedicalPersonnelService]
})
export class BrigadeMedicalPersonnelModule {}
