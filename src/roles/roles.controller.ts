import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RolesService) {}

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Get('/name/:name')
  findByName(@Param('name') name: string) {
    return this.roleService.findByName(name);
  }

  @Get('role/:id')
  findTags(@Param('id') id: number) {
    return this.roleService.findTags(id);
  }

}
