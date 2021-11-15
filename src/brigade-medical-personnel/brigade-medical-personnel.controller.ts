import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';
import { BrigadeMedicalPersonnel } from './entities/brigade-medical-personnel.entity';

@Crud({
  model: {
    type: BrigadeMedicalPersonnel
  }
})

@ApiTags('Sport brigade of medical personnel')
@Controller('sport_brigade_medical_personnel')
export class SportBrigadeMedicalPersonnelController implements CrudController<BrigadeMedicalPersonnel>{
  constructor(public service: BrigadeMedicalPersonnelService) {}
}
