import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BrigadeMedicalPersonnelService } from './sport_brigade_medical_personnel.service';
import { BrigadeMedicalPersonnel } from './entities/sport_brigade_medical_personnel.entity';

@Crud({
  model: {
    type: BrigadeMedicalPersonnel
  }
})

@ApiTags('Sport sport_brigade of medical personnel')
@Controller('3')
export class SportBrigadeMedicalPersonnelController implements CrudController<BrigadeMedicalPersonnel>{
  constructor(public service: BrigadeMedicalPersonnelService) {}
}
