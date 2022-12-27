import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    tag_id: number;

    @Column({nullable: true})
    name: string;
    @ManyToMany(()=>Role)
    @JoinTable({name:"role_tag"})
    role_id: number;
}
