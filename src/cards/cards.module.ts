import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { SportCardController } from './cards.controller';
import { Cards } from './entities/cards.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Cards])],
  controllers: [SportCardController],
  providers: [CardsService]
})
export class CardsModule {}
