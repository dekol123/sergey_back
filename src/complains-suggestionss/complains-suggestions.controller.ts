import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ComplainsSuggestionsService } from './complains-suggestions.service';
import { ComplainsSuggestions } from './entities/complains-suggestions.entity';

@Crud({
  model: {
    type: ComplainsSuggestions
  }
})

@ApiTags('Complains suggestions')
@Controller('complains_suggestions')
export class ComplainsSuggestionsController implements CrudController<ComplainsSuggestions>{
  constructor(public service: ComplainsSuggestionsService) {}
}
