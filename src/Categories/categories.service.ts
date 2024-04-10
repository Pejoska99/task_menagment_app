import { Injectable } from '@nestjs/common';
import { categories } from 'data/categories';

import { Category, CreateCategory } from 'src/interfaces/categories.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CategoriesService {
  private _categories = categories;

  getAll(): Category[] {
    return this._categories;
  }

  getbyId(id: number): Category {
    return this._categories.find((category) => category.id == id);
  }

  create(body: CreateCategory): Category {
    const id = uuid();
    const category: Category = { id, ...body };
    console.log(category);
    this._categories.push(category);
    return category;
  }

  update(id: number, body: Partial<CreateCategory>): Category {
    const index = this._categories.findIndex((category) => category.id == id);
    if (index !== -1) {
      this._categories[index] = { ...this._categories[index], ...body };
      return this._categories[index];
    }
    throw new Error('Category not found');
  }

  delete(id:number): boolean {
    const index = this._categories.findIndex(index => index.id == id);
    if(index !== -1) {
        this._categories.splice(index, 1);
        return true
    }
    return false
}
}
