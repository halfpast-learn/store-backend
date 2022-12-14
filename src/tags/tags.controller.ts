import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Tag } from './entities/tag.entity';
import { TagsService } from './tags.service'; 

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagsService) {}

  @Post()
  create(@Body() tag: Tag) {
    return this.tagService.create(tag);
  }

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get('/id/:id')
  findOne(@Param('id') id: string) {
    return this.tagService.findOne(+id);
  }

  @Get('/role/:role')
  findByRole(@Param('role') role: string) {
    return this.tagService.findByRole(role);
  }

  @Patch('/id/:id')
  update(@Param('id') id: string, @Body() tag: Tag) {
    return this.tagService.update(+id, tag);
  }

  @Delete('/id/:id')
  delete(@Param('id') id: string) {
    return this.tagService.delete(+id);
  }
}
