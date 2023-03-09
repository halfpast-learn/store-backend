import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { OrderService } from './orders.service'; 

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() order: Order) {
    console.log(JSON.stringify(order));
    return this.orderService.create(order);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() order: Order) {
    return this.orderService.update(+id, order);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.delete(+id);
  }
}
