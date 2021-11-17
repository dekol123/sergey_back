import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ComplexOfServicesService } from './sport_complex_of_services.service';
import { ComplexOfServices } from './entities/sport_complex_of_services.entity';

@Crud({
  model: {
    type: ComplexOfServices
  },
  query: {
    alwaysPaginate: false,
    join: {
      catalogueOfServices:{
        alias: 'catalogueOfServices',
        eager: true,
      }
    }
  }
})

@ApiTags('Sport complex of services')
@Controller('sport_complex_of_services')
export class SportComplexOfServicesController implements CrudController<ComplexOfServices> {
  constructor(public service: ComplexOfServicesService) {}  
}
