import { Tag } from 'src/tags/entities/tag.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    role_id: number;

    @Column({nullable: true})
    name: string;

    @ManyToMany(role => Tag)
    @JoinTable({name:"role_tag", joinColumn:{name:"role_role_id"}, inverseJoinColumn:{name:"tag_tag_id"}})
    tags: number[];
}
