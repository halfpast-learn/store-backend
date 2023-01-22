import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    tag_id: number;

    @Column({nullable: true})
    name: string;
}
