import { Arrivals } from 'src/sport_arrivals/entities/sport_arrivals.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { BrigadeMedicalPersonnel } from 'src/sport_brigade_medical_personnel/entities/sport_brigade_medical_personnel.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Entity('sport_brigade')
export class Brigade {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    nickName: string;    

    @OneToMany(() => Arrivals, arrival => arrival.brigades)
    arrivals: Arrivals[];

    @OneToMany(() => BrigadeMedicalPersonnel, brigadeMedicalPersonnel => brigadeMedicalPersonnel.brigade)
    brigadeMedicalPersonnels: BrigadeMedicalPersonnel[];    
}