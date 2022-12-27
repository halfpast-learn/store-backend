import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/user.module';
import { ItemsModule } from './items/items.module';
import { Item } from './items/entities/item.entity';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
import { TagModule } from './tags/tags.module';
import { RoleModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { Tag } from './tags/entities/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'store',
      username: 'root',
      password: '12345',
      schema: 'public',
      entities: [User, Item, Order, Tag, Role],
      synchronize: false,
    }), UserModule, ItemsModule, OrderModule, TagModule, RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
