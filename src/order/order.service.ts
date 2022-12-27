import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm/dist';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(item: Order): Promise<Order> {
    return await this.orderRepository.save(item);
  }

  async findAll(): Promise<Order[]> {
    return await this.orderRepository.find();
  }

  async findOne(order_id: number): Promise<Order> {
    return await this.orderRepository.findOne({
      where: {
        order_id: order_id,
      },
    });
  }

  async update(order_id: number, item: Order): Promise<UpdateResult> {
    return await this.orderRepository.update(order_id, item);
  }

  async delete(order_id: number): Promise<DeleteResult> {
    return await this.orderRepository.delete(order_id);
  }
}
