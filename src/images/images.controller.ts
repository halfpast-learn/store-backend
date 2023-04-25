import { Controller, Get, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get(':id')
  findOne(@Param('id') id: number, @Res({ passthrough: true }) res: Response) {
    res.set({ 'Content-Type': 'image/jpeg' });
    return this.imagesService.findOne(id);
  }
}
