import { Item } from 'src/items/entities/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    tag_id: number;

    @Column({nullable: true})
    name: string;

    @ManyToMany(()=>Item, (item)=>item.tags)
    @JoinTable({name:"tag_item", joinColumn: {name:"tag_tag_id"}, inverseJoinColumn: {name:"item_item_id"}})
    items: Item[];
}
