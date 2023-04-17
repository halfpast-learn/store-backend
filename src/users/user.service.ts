import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm/dist';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { User } from './entities/user.entity';

import { randomBytes, createHash } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    user.password = this.encryptPassword(user.password);
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
  async findByLogin(username: string, password: string): Promise<User> {
    let user = await this.userRepository.findOne({
      where: {
        username: username,
      },
    });
    if (this.comparePassword(password, user.password)) {
      return user;
    }
    else {
      return null;
    }
  }

  async findOrders(user_id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        user_id: user_id,
      },
      join: {
        alias: "user",
        leftJoinAndSelect: {
          "orders": "user.orders",
          "items": "orders.items"
        }
      }
    });
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.userRepository.update(user.user_id, user);
  }

  async updatepw(user: User): Promise<UpdateResult> {
    user.password = this.encryptPassword(user.password);
    return await this.userRepository.update(user.user_id, user);
  }

  async delete(user_id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(user_id);
  }

  encryptPassword(password: string): string {
    let salt = randomBytes(16).toString("hex");
    password = salt+password;
    let hash = createHash('sha256');
    return salt+":"+hash.update(password).digest("hex");
  }

  comparePassword(input: string, stored: string): boolean {
    let salt = stored.slice(0,32);
    input = salt+input;
    let hash = createHash('sha256');
    let hashed = salt+":"+hash.update(input).digest("hex");
    return hashed == stored;
  }
}
