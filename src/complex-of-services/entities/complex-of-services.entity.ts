import { ApiProperty } from '@nestjs/swagger';
import { CatalogueOfServices } from 'src/catalogue-of-services/entities/сatalogue-of-services.entity';
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