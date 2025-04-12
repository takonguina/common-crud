import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionModule } from './mission/mission.module';
import { ProjectModule } from './projet/project.module';

@Module({
  imports: [MissionModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
