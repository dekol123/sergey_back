import { Module } from '@nestjs/common';
import { BrigadeService } from './sport_brigade.service';
import { SportController } from './sport_brigade.controller';
import { Brigade } from './entities/sport_brigade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Brigade])],
  controllers: [SportController],
  providers: [BrigadeService]
})
export class BrigadeModule {}
