import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RolesService) {}

  @Post()
  create(@Body() role: Role) {
    return this.roleService.create(role);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Get('role/:id')
  findByRole(@Param('id') id: number) {
    return this.roleService.findTags(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() role: Role) {
    return this.roleService.update(+id, role);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.roleService.delete(+id);
  }
}
