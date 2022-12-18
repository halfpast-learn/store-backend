import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  readAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('create')
  async create(@Body() user: User): Promise<any> {
    return this.userService.create(user);
  }

  @Get(':user_id')
  findOne(@Param('user_id') user_id: number): Promise<any> {
    return this.userService.findOne(+user_id);
  }

  @Patch(':id/update')
  async update(@Param('id') user_id, @Body() user: User): Promise<any> {
    user.user_id = user_id;
    return this.userService.update(user);
  }

  @Delete(':user_id/delete')
  async delete(@Param('user_id') id: number): Promise<any> {
    return this.userService.delete(+id);
  }
}
