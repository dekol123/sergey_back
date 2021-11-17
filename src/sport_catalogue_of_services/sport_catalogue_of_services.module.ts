import { Module } from '@nestjs/common';
import { CatalogueOfServicesService } from './sport_catalogue_of_services.service';
import { SportCatalogueOfServicesController } from './sport_catalogue_of_services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogueOfServices } from './entities/sport_catalogue_of_services.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CatalogueOfServices])],
  controllers: [SportCatalogueOfServicesController],
  providers: [CatalogueOfServicesService]
})
export class Sport_catalogue_of_servicesModule {}
