import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BrigadeMedicalPersonnel } from "./entities/sport_brigade_medical_personnel.entity";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class BrigadeMedicalPersonnelService extends TypeOrmCrudService<BrigadeMedicalPersonnel> {  
  constructor(@InjectRepository(BrigadeMedicalPersonnel) repo) {
    super(repo)
  }
}
