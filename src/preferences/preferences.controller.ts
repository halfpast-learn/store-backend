import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreferenceService as PreferencesService } from './preferences.service';
import { Preference } from './entities/preference.entity';

@Controller('roles')
export class PreferenceController {
  constructor(private readonly preferenceService: PreferencesService) {}

  @Get()
  findAll() {
    return this.preferenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preferenceService.findOne(+id);
  }

  @Get('/name/:name')
  findByName(@Param('name') name: string) {
    return this.preferenceService.findByName(name);
  }

  @Get('role/:id')
  findTags(@Param('id') id: number) {
    return this.preferenceService.findTags(id);
  }

}
