import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { CreateTask, Task } from 'src/interfaces/task.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor ( private readonly taskService: TasksService) {}

    @Get() 
    getAll():Task [] {
        return this.taskService.getAll();
    }

    @Get(':id')
    getById(@Param() params): Task {
        const id = params.id;
        return this.taskService.getById(id);
    }

    @Post()
    create(@Body() body: CreateTask) {
        return this.taskService.create(body)
    }

    @Patch(':id')
    update(@Param() params, @Body() body:Partial<CreateTask>) {
        const id = params.id;
        return this.taskService.update(id, body);
    }

    @Delete(':id')
    delete(@Param() params):string {
        const id = params.id;
        const isTaskDeleted = this.taskService.delete(id);
        if(isTaskDeleted) {
            return 'Task delete successfully'
        }

        return 'Delete operation failed'

    }
}
