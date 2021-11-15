import { Module } from '@nestjs/common';
import { MedicalPersonnelService } from './medical-personnel.service';
import { SportMedicalPersonnelController } from './medical-personnel.controller';
import { MedicalPersonnel } from './entities/medical-personnel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([MedicalPersonnel])],
  controllers: [SportMedicalPersonnelController],
  providers: [MedicalPersonnelService]
})
export class MedicalPersonnelModule {}
