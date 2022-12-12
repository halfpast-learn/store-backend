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
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  readAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('create')
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get(':user_id')
  findOne(@Param('user_id') user_id: number) {
    return this.userService.findOne(+user_id);
  }

  @Patch('update')
  update(@Body() user: User) {
    return this.userService.update(user);
  }

  @Delete(':user_id')
  remove(@Param('user_id') id: number) {
    return this.userService.delete(+id);
  }
}
