import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonCrudService<T> {
  private items: T[] = [];
  private idCounter = 0;

  create(item: Omit<T, 'id'>): T {
    const newItem = { ...item, id: this.idCounter++ } as T;
    this.items.push(newItem);
    return newItem;
  }

  findAll(): T[] {
    return this.items;
  }

  findOne(id: string): T | undefined {
    const parsedId = parseInt(id, 10);
    return this.items.find((item) => (item as any).id === parsedId);
  }

  remove(id: number): boolean {
    const index = this.items.findIndex((item) => (item as any).id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
}
