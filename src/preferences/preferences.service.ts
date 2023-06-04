import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm/dist';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { Preference } from './entities/preference.entity';

@Injectable()
export class PreferenceService {
  constructor(
    @InjectRepository(Preference)
    private roleRepository: Repository<Preference>,
  ) {}

  async create(role: Preference): Promise<Preference> {
    return await this.roleRepository.save(role);
  }

  async findAll(): Promise<Preference[]> {
    return await this.roleRepository.find();
  }

  async findOne(role_id: number): Promise<Preference> {
    return await this.roleRepository.findOne({
      where: {
        preference_id: role_id,
      },
    });
  }

  async findByName(role_name: string): Promise<Preference> {
    return await this.roleRepository.findOne({
      where: {
        name: role_name,
      },
    });
  }

  async findTags(role_id: number) {
    let r: Preference = await this.roleRepository
      .createQueryBuilder('role')
      .where('role_id = :id', { id: role_id })
      .innerJoinAndSelect('role.tags', 'tag')
      .getOne();
    return r.tags;
  }

  async update(role_id: number, role: Preference): Promise<UpdateResult> {
    return await this.roleRepository.update(role_id, role);
  }

  async delete(role_id: number): Promise<DeleteResult> {
    return await this.roleRepository.delete(role_id);
  }
}
