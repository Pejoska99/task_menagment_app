export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
    categoryId:number

}

export interface CreateTask {
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
    categoryId:number 
}