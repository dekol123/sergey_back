import { Test, TestingModule } from '@nestjs/testing';
import { SportCatalogueOfServicesController } from './catalogue-of-services.controller';
import { CatalogueOfServicesService } from './catalogue-of-services.service';

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
