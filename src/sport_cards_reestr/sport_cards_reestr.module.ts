import { Module } from '@nestjs/common';
import { RegisterOfCardsService } from './sport_cards_reestr.service';
import { SportCardsReestr } from './sport_cards_reestr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterOfCards } from './entities/register-of-cards.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RegisterOfCards])],
  controllers: [SportCardsReestr],
  providers: [RegisterOfCardsService]
})
export class Sport_cards_reestrModule {}
