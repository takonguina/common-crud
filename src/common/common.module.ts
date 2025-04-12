import { Module } from '@nestjs/common';
import { CommonCrudService } from './common-crud.service';

@Module({
  providers: [CommonCrudService],
  exports: [CommonCrudService],
})
export class CommonModule {}
