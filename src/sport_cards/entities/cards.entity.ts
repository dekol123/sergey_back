import { RegisterOfCards } from 'src/sport_cards_reestr/entities/register-of-cards.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('sport_cards')
export class Cards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cardContent: string;

    @OneToOne(() => RegisterOfCards)
    @JoinColumn()
    registerOfCard: RegisterOfCards;

    @Column()
    registerOfCardId: number;
}