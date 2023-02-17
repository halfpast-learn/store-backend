import { Tag } from 'src/tags/entities/tag.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    item_id: number;

    @Column({nullable: true})
    description: string;
    @Column({nullable: true})
    price: number;

    @ManyToMany(()=>Tag, (tag)=>tag.items)
    @JoinTable({name:"tag_item", inverseJoinColumn: {name:"tag_tag_id"}, joinColumn: {name:"item_item_id"}})
    tags: Tag[];
}
