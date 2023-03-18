import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm/dist';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(user_id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        user_id: user_id,
      },
    });
  }
  async findByLogin(username: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        username: username,
      },
    });
  }

  async findOrders(user_id: number): Promise<User> {
    return await this.userRepository.findOne({
      relations: {
        orders: true,
      },
      where: {
        user_id: user_id,
      },
    });
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.userRepository.update(user.user_id, user);
  }

  async delete(user_id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(user_id);
  }
}
