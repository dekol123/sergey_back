import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { MedicalPersonnel } from './entities/medical-personnel.entity';
import { SportMedicalPersonnelController } from './medical-personnel.controller';

@Injectable()
export class MedicalPersonnelService extends TypeOrmCrudService<MedicalPersonnel>{
  constructor(@InjectRepository(MedicalPersonnel) repo){
    super(repo)
  }
}
