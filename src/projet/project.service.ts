import { Injectable } from '@nestjs/common';
import { CommonCrudService } from '../common/common-crud.service';
import { Project } from './project.interface';

@Injectable()
export class ProjectService extends CommonCrudService<Project> {}
