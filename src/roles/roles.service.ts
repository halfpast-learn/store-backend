import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm/dist';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async create(role: Role): Promise<Role> {
    return await this.roleRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async findOne(role_id: number): Promise<Role> {
    return await this.roleRepository.findOne({
      where: {
        role_id: role_id,
      },
    });
  }

  async update(role_id: number, role: Role): Promise<UpdateResult> {
    return await this.roleRepository.update(role_id, role);
  }

  async delete(role_id: number): Promise<DeleteResult> {
    return await this.roleRepository.delete(role_id);
  }
}
