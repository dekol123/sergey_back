import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { RegisterOfCards } from './entities/register-of-cards.entity';

@Injectable()
export class RegisterOfCardsService extends TypeOrmCrudService<RegisterOfCards>{
  constructor(@InjectRepository(RegisterOfCards) repo) {
    super(repo)
  }
}
