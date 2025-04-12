import { Controller } from '@nestjs/common';
import { CrudController } from '../common/crud.controller';
import { Project } from './project.interface';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectsController extends CrudController<Project> {
  constructor(private readonly projectService: ProjectService) {
    super(projectService);
  }
}
