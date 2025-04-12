import { Controller, Get } from '@nestjs/common';
import { CrudController } from '../common/crud.controller';
import { MissionService } from './mission.service';
import { Mission } from './mission.interface';

@Controller('missions')
export class MissionController extends CrudController<Mission> {
  constructor(private readonly missionService: MissionService) {
    super(missionService);
  }

  @Get('tommy')
  getCustomMessage(): string {
    return 'mission tommy';
  }
}
