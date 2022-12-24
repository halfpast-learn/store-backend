import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({nullable: true})
    username: string;
    @Column({nullable: true})
    password: string;
    @Column({nullable: true})
    first_name: string;
    @Column({nullable: true})
    last_name: string;
    @Column({nullable: true})
    phone: string;
    @Column({nullable: true})
    email: string;
}
