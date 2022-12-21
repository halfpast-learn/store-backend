import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    phone: string;
    @Column()
    email: string;
}
