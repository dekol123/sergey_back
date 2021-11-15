import { Module } from '@nestjs/common';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';
import { SportBrigadeMedicalPersonnelController } from './brigade-medical-personnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrigadeMedicalPersonnel } from './entities/brigade-medical-personnel.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BrigadeMedicalPersonnel])],
  controllers: [SportBrigadeMedicalPersonnelController],
  providers: [BrigadeMedicalPersonnelService]
})
export class BrigadeMedicalPersonnelModule {}
