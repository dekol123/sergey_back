import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { MedicalPersonnel } from 'src/sport_medical_personnel/entities/sport_medical_personnel.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('sport_patients')
export class Patients {
    @PrimaryGeneratedColumn()    
    id: number;

    @ApiProperty()
    @Column()
    firstName: string;

    @ApiProperty()
    @Column()
    surname: string;

    @ApiProperty()
    @Column()
    lastName: string;

    @ApiProperty()
    @Column()
    address: string;

    @ManyToMany(type => MedicalPersonnel, medicalPersonnel => medicalPersonnel.patients)
    @JoinTable()
    medicalPersonnel: MedicalPersonnel[];    
}
