import { ApiProperty } from '@nestjs/swagger';
import { CatalogueOfServices } from 'src/sport_catalogue_of_services/entities/sport_catalogue_of_services.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';


@Entity('sportComplexOfServices')
export class ComplexOfServices {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    totalCost: number;
    
    @ApiProperty()
    @ManyToMany(type => CatalogueOfServices, catalogueOfServices => catalogueOfServices.complexOfServices)
    catalogueOfServices: CatalogueOfServices[];
}