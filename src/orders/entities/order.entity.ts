import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true})
  comment: string;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_owner' })
  user_owner: number;

  @ManyToMany(() => Item)
  @JoinTable({ name: 'order_item', joinColumn: {name: 'order_order_id'}, inverseJoinColumn: {name: 'item_item_id'}})
  items: Item[];
}
