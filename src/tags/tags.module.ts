import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagController } from './tags.controller';
import { Tag } from './entities/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [TagController],
  providers: [TagsService],
})
export class TagModule {}
