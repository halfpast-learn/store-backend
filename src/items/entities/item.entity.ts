import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    item_id: number;

    @Column({nullable: true})
    description: string;
    @Column({nullable: true})
    price: number;
}
