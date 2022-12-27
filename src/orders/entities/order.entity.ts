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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_owner' })
  user_owner: number;

  @ManyToMany(() => Item)
  @JoinTable({ name: 'order_item' })
  items: Item[];
}
