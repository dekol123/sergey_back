import { Test, TestingModule } from '@nestjs/testing';
import { SportCatalogueOfServicesController } from './sport_catalogue_of_services.controller';
import { CatalogueOfServicesService } from './sport_catalogue_of_services.service';

describe('SportCatalogueOfServicesController', () => {
  let controller: SportCatalogueOfServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportCatalogueOfServicesController],
      providers: [CatalogueOfServicesService],
    }).compile();

    controller = module.get<SportCatalogueOfServicesController>(SportCatalogueOfServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
