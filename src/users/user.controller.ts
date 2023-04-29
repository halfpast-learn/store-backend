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

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() user: User): Promise<any> {
    return this.userService.create(user);
  }

  @Get(':user_id')
  findOne(@Param('user_id') user_id: number): Promise<any> {
    return this.userService.findOne(+user_id);
  }

  @Post("/name/login")
  findByLogin(@Body() info: string[]): Promise<any> {
    return this.userService.findByLogin(info[0],info[1]);
  }

  @Get(":id/orders")
  findOrders(@Param('id') user_id: number): Promise<User> {
    return this.userService.findOrders(user_id);
  }

  @Patch(':id/update')
  async update(@Param('id') user_id, @Body() user: User): Promise<any> {
    user.user_id = user_id;
    return this.userService.update(user);
  }

  @Patch(':id/updatepw')
  async updatepw(@Param('id') user_id, @Body() user: User): Promise<any> {
    user.user_id = user_id;
    return this.userService.updatepw(user);
  }
}
