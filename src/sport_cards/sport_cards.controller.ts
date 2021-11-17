import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CardsService } from './sport_cards.service';
import { Cards } from './entities/cards.entity';

@Crud({
  model: {
    type: Cards
  }
})

@ApiTags('Sport sport_cards')
@Controller('sport_cards')
export class SportCardController implements CrudController<Cards> {
  constructor(public service: CardsService) {}
}
