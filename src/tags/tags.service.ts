import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm/dist';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';

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

  async update(tag_id: number, tag: Tag): Promise<UpdateResult> {
    return await this.tagRepository.update(tag_id, tag);
  }

  async delete(tag_id: number): Promise<DeleteResult> {
    return await this.tagRepository.delete(tag_id);
  }
}
