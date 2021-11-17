import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CatalogueOfServicesService } from './sport_catalogue_of_services.service';
import { CatalogueOfServices } from './entities/sport_catalogue_of_services.entity';

@Crud({
  model: {
    type: CatalogueOfServices
  },
  query: {
    alwaysPaginate: false,
    join: {
      complexOfServices:{
        alias: 'complexOfServices',
        eager: true,
      },
      medicalPersonnels: {
        alias: 'medicalPersonnels',
        eager: true,
      }
    }
  }
})

@ApiTags('Sport catalogue of services')
@Controller('sport_catalogue_of_services')
export class SportCatalogueOfServicesController implements CrudController<CatalogueOfServices> {
  constructor(public service: CatalogueOfServicesService) {}  
}
