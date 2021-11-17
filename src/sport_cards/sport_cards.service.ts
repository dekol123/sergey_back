import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Cards } from './entities/cards.entity';

@Injectable()
export class CardsService extends TypeOrmCrudService<Cards>{
  constructor(@InjectRepository(Cards) repo){
    super(repo)
  }
}
