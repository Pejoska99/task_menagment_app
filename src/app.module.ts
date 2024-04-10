import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CategoryModule } from './Categories/categories.module';
import { CategoriesService } from './Categories/categories.service';
import { CategoriesController } from './Categories/categories.controller';

@Module({
  imports: [TasksModule, CategoryModule],
  controllers: [AppController, CategoriesController],
  providers: [AppService, CategoriesService],
})
export class AppModule {}
