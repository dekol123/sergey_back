import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ArrivalsModule } from './sport_arrivals/sport_arrivals.module';
import { BrigadeMedicalPersonnelModule } from './sport_brigade_medical_personnel/sport_brigade_medical_personnel.module';
import { BrigadeModule } from './sport_brigade/sport_brigade.module';
import { ComplexOfServicesModule } from './sport_complex_of_services/sport_complex_of_services.module';
import { Sport_catalogue_of_servicesModule } from './sport_catalogue_of_services/sport_catalogue_of_services.module';
import { CardsModule } from './sport_cards/sport_cards.module';
import { DepartmentsModule } from './sport_departments/sport_departments.module';
import { MedicalPersonnelModule } from './sport_medical_personnel/sport_medical_personnel.module';
import { PatientsModule } from './patients/patients.module';
import { Sport_cards_reestrModule } from './sport_cards_reestr/sport_cards_reestr.module';
import { NewsModule } from './news/news.module';
import { ComplaintsSuggestionsModule } from './complains-suggestionss/complains-suggestions.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ArrivalsModule, BrigadeMedicalPersonnelModule, BrigadeModule, ComplexOfServicesModule, Sport_catalogue_of_servicesModule, CardsModule, ComplaintsSuggestionsModule, DepartmentsModule, MedicalPersonnelModule, PatientsModule, Sport_cards_reestrModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
