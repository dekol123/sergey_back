import { Module } from '@nestjs/common';
import { ComplexOfServicesService } from './sport_complex_of_services.service';
import { SportComplexOfServicesController } from './sport_complex_of_services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplexOfServices } from './entities/sport_complex_of_services.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ComplexOfServices])],
  controllers: [SportComplexOfServicesController],
  providers: [ComplexOfServicesService]
})
export class ComplexOfServicesModule {}
