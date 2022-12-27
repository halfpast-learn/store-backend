import { Tag } from 'src/tags/entities/tag.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    role_id: number;

    @Column({nullable: true})
    name: string;
    @ManyToMany(()=>Tag)
    @JoinTable({name:"role_tag"})
    tag_id: number;
}
