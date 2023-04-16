import { Order } from 'src/orders/entities/order.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({nullable: true})
    username: string;
    @Column({nullable: true})
    password: string;

    @Column({ nullable: true })
    role: number;

    @ManyToOne(()=> Role, role => role.role_id)
    @JoinColumn({name: "role"})
    roleData: Role;

    @OneToMany(()=>Order, (order)=>order.user_owner)
    orders: Order[];
}
