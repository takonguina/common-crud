import { Module } from '@nestjs/common';
import { ProjectsController } from './project.controller';
import { ProjectService } from './project.service';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectService],
  imports: [CommonModule],
})
export class ProjectModule {}
