import { Module } from '@nestjs/common';
import { ArrivalsService } from './sport_arrivals.service';
import { SportArrivals } from './sport_arrivals.controller';
import { Arrivals } from './entities/sport_arrivals.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Arrivals])],
  controllers: [SportArrivals],
  providers: [ArrivalsService]
})
export class ArrivalsModule {}
