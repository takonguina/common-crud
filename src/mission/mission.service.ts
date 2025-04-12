import { Injectable } from '@nestjs/common';
import { CommonCrudService } from '../common/common-crud.service';
import { Mission } from './mission.interface';

@Injectable()
export class MissionService extends CommonCrudService<Mission> {}
