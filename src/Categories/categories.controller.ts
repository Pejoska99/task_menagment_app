import { Controller, Get, Param, Body, Post, Patch, Delete } from '@nestjs/common';
import { Category, CreateCategory } from 'src/interfaces/categories.interface';
import { CategoriesService } from './categories.service';

@Controller('category')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  GetAll(): Category[] {
    return this.categoryService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Category {
    const id = params.id;
    return this.categoryService.getbyId(id);
  }

  @Post()
  create(@Body() body: CreateCategory) {
    return this.categoryService.create(body);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() body: Partial<CreateCategory>,
  ): Category {
    return this.categoryService.update(id, body);
  }

  @Delete(':id')
    delete(@Param() params):string {
        const id = params.id;
        const isTaskDeleted = this.categoryService.delete(id);
        if(isTaskDeleted) {
            return 'Task delete successfully'
        }

        return 'Delete operation failed'

    }
}
