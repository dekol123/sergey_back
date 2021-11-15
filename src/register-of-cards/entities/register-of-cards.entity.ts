import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Arrivals } from 'src/arrivals/entities/arrivals.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('SportCardsReestr')
export class RegisterOfCards {
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
    registration: string;

    @OneToMany(() => Arrivals, arrivals => arrivals.registerOfCards)
    arrivals: Arrivals[];
}