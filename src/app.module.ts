import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/user.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'store',
      username: 'root',
      password: '12345',
      schema: 'public',
      entities: [User],
      synchronize: false,
    }), UserModule, ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
