import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { MedicalPersonnel } from 'src/sport_medical_personnel/entities/sport_medical_personnel.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('sport_departments')
export class Departments {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column()
    contacts: string;

    @ApiProperty()
    @Column()
    description: string;
    
    @OneToOne(() => MedicalPersonnel)
    @JoinColumn()
    medicalPersonnel: MedicalPersonnel;

    @ApiProperty()
    medicalPersonnelId: number;
}