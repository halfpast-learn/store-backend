import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Item } from 'src/items/entities/item.entity';

import { Repository, UpdateResult, DeleteResult, In } from 'typeorm';

import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async create(tag: Tag): Promise<Tag> {
    return await this.tagRepository.save(tag);
  }

  async findAll(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }

  async findOne(tag_id: number): Promise<Tag> {
    return await this.tagRepository.findOne({
      where: {
        tag_id: tag_id,
      },
    });
  }

  async findItems(tag_id: number): Promise<Item[]> {
    let tags = await this.tagRepository.find({
      relations: {
        items: true,
      },
      where: { tag_id: tag_id },
    });
    if (tags.length != 0) {
      return tags[0].items;
    } else {
      return null;
    }
  }

  async findItemsByTags(tag_ids: number[]): Promise<Item[]> {
    let tags = await this.tagRepository.find({
      relations: {
        items: true,
      },
      where: { tag_id: In([...tag_ids]) },
    });
    let items: Item[] = [];
    for (let tag of tags) {
      items = items.concat(tag.items);
    }
    items = [...new Set(items)];
    return items;
  }

  async update(tag_id: number, tag: Tag): Promise<UpdateResult> {
    return await this.tagRepository.update(tag_id, tag);
  }

  async delete(tag_id: number): Promise<DeleteResult> {
    return await this.tagRepository.delete(tag_id);
  }
}
