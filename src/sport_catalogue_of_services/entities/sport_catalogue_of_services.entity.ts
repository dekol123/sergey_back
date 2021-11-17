import { ApiProperty } from '@nestjs/swagger';
import { ComplexOfServices } from 'src/sport_complex_of_services/entities/sport_complex_of_services.entity';
import { MedicalPersonnel } from 'src/sport_medical_personnel/entities/sport_medical_personnel.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sportCatalogueOfServices')
export class CatalogueOfServices{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    @Column()
    serviceDescription: string;

    @ApiProperty()
    @ManyToMany(type => MedicalPersonnel,  medicalPersonnel => medicalPersonnel.catalogueOfServices)
    @JoinTable()
    medicalPersonnels: MedicalPersonnel[];

    @ApiProperty()
    @ManyToMany(type => ComplexOfServices,  complexOfServices => complexOfServices.catalogueOfServices)
    @JoinTable()    
    complexOfServices: ComplexOfServices[];    

}