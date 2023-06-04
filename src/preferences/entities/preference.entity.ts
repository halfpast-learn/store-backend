import { Tag } from 'src/tags/entities/tag.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Preference {

    @PrimaryGeneratedColumn()
    preference_id: number;

    @Column({nullable: true})
    name: string;

    @ManyToMany(preference => Tag)
    @JoinTable({name:"preference_tag", joinColumn:{name:"preference_id"}, inverseJoinColumn:{name:"tag_id"}})
    tags: number[];
}
