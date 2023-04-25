import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm/dist';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async create(item: Item): Promise<Item> {
    return await this.itemRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find({
      relations: {
        tags: true,
      }
    });
  }

  async findOne(item_id: number): Promise<Item> {
    return await this.itemRepository.findOne({
      where: {
        item_id: item_id,
      },
      relations: {
        tags: true,
      }
    });
  }

  async update(item_id: number, item: Item): Promise<UpdateResult> {
    return await this.itemRepository.update(item_id, item);
  }

  async delete(item_id: number): Promise<DeleteResult> {
    return await this.itemRepository.delete(item_id);
  }
}
