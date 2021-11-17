import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { MedicalPersonnel } from './entities/sport_medical_personnel.entity';
import { SportMedicalPersonnelController } from './sport_medical_personnel.controller';

@Injectable()
export class Sport_medical_personnelService extends TypeOrmCrudService<MedicalPersonnel>{
  constructor(@InjectRepository(MedicalPersonnel) repo){
    super(repo)
  }
}
