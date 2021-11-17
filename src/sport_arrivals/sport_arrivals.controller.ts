import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ArrivalsService } from './sport_arrivals.service';
import { Arrivals } from './entities/sport_arrivals.entity';

@Crud({
  model: {
    type: Arrivals
  }
})

@ApiTags("Sport sport_arrivals")
@Controller('sport_arrivals')
export class SportArrivals implements CrudController<Arrivals>{
  constructor(public service: ArrivalsService) {}
}
