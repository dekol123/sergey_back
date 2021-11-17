import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ComplexOfServices } from './entities/sport_complex_of_services.entity';

@Injectable()
export class ComplexOfServicesService extends TypeOrmCrudService<ComplexOfServices> {
  constructor(@InjectRepository(ComplexOfServices) repo) {
    super(repo)
  }
}
