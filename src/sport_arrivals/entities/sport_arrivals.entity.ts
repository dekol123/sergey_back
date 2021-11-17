import { ApiProperty } from '@nestjs/swagger';
import { Brigade } from 'src/sport_brigade/entities/sport_brigade.entity';
import { RegisterOfCards } from 'src/sport_cards_reestr/entities/register-of-cards.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity('sport_arrivals')
export class Arrivals {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    reason: string;  

    @ApiProperty()
    @ManyToOne(() => Brigade, brigade => brigade.arrivals)
    brigades: Brigade;

    @Column({ nullable: true })
    @ApiProperty()
    brigadesId?: number;

    @ApiProperty()
    @ManyToOne(() => RegisterOfCards, registerOfCards => registerOfCards.arrivals)
    registerOfCards: RegisterOfCards;

    @Column({ nullable: true })
    @ApiProperty()
    registerOfCardsId?: number;
}