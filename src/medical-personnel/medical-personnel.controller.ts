import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalPersonnelService } from './medical-personnel.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { MedicalPersonnel } from './entities/medical-personnel.entity';

@Crud({
  model:{
    type: MedicalPersonnel
  }
})

@ApiTags('Sport medical personnel')
@Controller('sport_medical_personnel')
export class SportMedicalPersonnelController implements CrudController<MedicalPersonnel>{
  constructor(public service: MedicalPersonnelService) {}
}
