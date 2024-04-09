import { Injectable } from '@nestjs/common';
import { tasks } from 'data/tasks';
import { CreateTask, Task } from 'src/interfaces/task.interface';
import { v4 as uuid} from 'uuid';


@Injectable()
export class TasksService {
    private _tasks = tasks;

    getAll():Task[] {
       return this._tasks;

    }

    getById(id:number): Task {
        return this._tasks.find(task => task.id == id)
    }

    create(body:CreateTask): Task {
        const id = uuid();
        const task: Task = {id, ...body};
        console.log(task);
        this._tasks.push(task);
        return task

    }

    update(id:number, body: Partial<CreateTask>): Task {
        const index = this._tasks.findIndex(task => task.id == id);
        if ( index !== -1) {
            this._tasks[index] = {...this._tasks[index], ...body};
            return this._tasks[index];
        }
        throw new Error('Replace operation failed');
    }

    delete(id:number): boolean {
        const index = this._tasks.findIndex(index => index.id == id);
        if(index !== -1) {
            this._tasks.splice(index, 1);
            return true
        }
        return false
    }
}
