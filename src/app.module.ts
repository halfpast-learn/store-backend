import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { UserModule } from './user/user.module';

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
    }), UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
