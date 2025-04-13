import { Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { CommonCrudService } from './common-crud.service';

export abstract class CrudController<T> {
  constructor(protected readonly crudService: CommonCrudService<T>) {}

  @Get()
  findAll(@Query() query?: Record<string, any>): T[] {
    if (Object.keys(query).length) {
      return this.crudService.filter(query);
    }
    return this.crudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): T {
    return this.crudService.findOne(id);
  }

  @Post()
  create(@Body() dto: Omit<T, 'id'>): T {
    return this.crudService.create(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): boolean {
    return this.crudService.remove(id);
  }
}
