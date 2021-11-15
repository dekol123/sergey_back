import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BrigadeService } from './brigade.service';
import { Brigade } from './entities/brigade.entity';

@Crud({
  model: {
    type: Brigade
  },
  query:{ join: {
    brigadeMedicalPersonnels:{
      alias: 'brigadeMedicalPersonnels',
      eager: true,
      },
    }
  }
})

@ApiTags('Sport brigade')
@Controller('sport_brigade')
export class SportController implements CrudController<Brigade>{
  constructor(public service: BrigadeService) {}  
}
