import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleController } from './roles.controller';
import { Role } from './entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RolesService]
})
export class RoleModule {}
