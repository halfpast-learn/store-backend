import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagsService } from './tags.service'; 

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagsService) {}

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id/items')
  findItems(@Param('id') id: number) {
    return this.tagService.findItems(id);
  }

  @Get(':ids/allItems')
  findItemsByTags(@Param('ids') ids: string) {
    return this.tagService.findItemsByTags(ids.split(',').map(Number));
  }

  @Post('/opinion')
  changeOpinions(@Body() data) {
    console.log(data);
      return this.tagService.changeTagOpinions(data);
  }
}
