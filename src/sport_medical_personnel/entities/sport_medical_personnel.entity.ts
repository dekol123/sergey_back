import { CatalogueOfServices } from 'src/sport_catalogue_of_services/entities/sport_catalogue_of_services.entity';
import { Patients } from 'src/patients/entities/patients.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('sportMedicalPersonnel')
export class MedicalPersonnel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    surname: string;

    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column()
    position: string;

    @ManyToMany(type => CatalogueOfServices,  catalogueOfServices => catalogueOfServices.medicalPersonnels)
    catalogueOfServices: CatalogueOfServices[];

    @ManyToMany(type => Patients,  patients => patients.medicalPersonnel)
    patients: Patients[];
}