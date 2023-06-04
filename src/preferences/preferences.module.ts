import { Module } from '@nestjs/common';
import { PreferenceService } from './preferences.service';
import { PreferenceController } from './preferences.controller';
import { Preference } from './entities/preference.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Preference])],
  controllers: [PreferenceController],
  providers: [PreferenceService]
})
export class PreferenceModule {}
