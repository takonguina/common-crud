import { Module } from '@nestjs/common';
import { MissionController } from './mission.controller';
import { MissionService } from './mission.service';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [MissionController],
  providers: [MissionService],
  imports: [CommonModule],
})
export class MissionModule {}
