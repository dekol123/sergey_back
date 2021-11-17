import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Sport_medical_personnelService } from './sport_medical_personnel.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { MedicalPersonnel } from './entities/sport_medical_personnel.entity';

@Crud({
  model:{
    type: MedicalPersonnel
  }
})

@ApiTags('Sport medical personnel')
@Controller('sport_medical_personnel')
export class SportMedicalPersonnelController implements CrudController<MedicalPersonnel>{
  constructor(public service: Sport_medical_personnelService) {}
}
