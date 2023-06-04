import { Order } from 'src/orders/entities/order.entity';
import { Preference } from 'src/preferences/entities/preference.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({nullable: true})
    username: string;
    @Column({nullable: true})
    password: string;

    @ManyToMany(()=> Preference, role => role.preference_id)
    @JoinTable({name: "preference_user", joinColumn: {name: "preference_id"}, inverseJoinColumn: {name: "user_id"}})
    preferences: Preference[];

    @OneToMany(()=>Order, (order)=>order.user_owner)
    orders: Order[];
}
