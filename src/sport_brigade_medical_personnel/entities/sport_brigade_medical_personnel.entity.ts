import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Brigade } from '../../sport_brigade/entities/sport_brigade.entity'

@Entity('sportBrigadeMedicalPersonnel')
export class BrigadeMedicalPersonnel {
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
    position: string;    

    @ManyToOne(() => Brigade, brigade => brigade.brigadeMedicalPersonnels)
    brigade: Brigade;

    @Column({ nullable: true })
    @ApiProperty()
    @Column()
    brigadeId?: number;
}