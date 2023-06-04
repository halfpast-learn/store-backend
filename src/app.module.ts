import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/user.module';
import { ItemsModule } from './items/items.module';
import { Item } from './items/entities/item.entity';
import { OrderModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { TagModule } from './tags/tags.module';
import { PreferenceModule } from './preferences/preferences.module';
import { Preference } from './preferences/entities/preference.entity';
import { Tag } from './tags/entities/tag.entity';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'store',
      username: 'postgres',
      password: '12345',
      schema: 'public',
      entities: [User, Item, Order, Tag, Preference],
      synchronize: false,
    }), UserModule, ItemsModule, OrderModule, TagModule, PreferenceModule, ImagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
