export interface myQueue{
    
    tasks: Array<string>;
    addTask(task:string): number;
    listAllTasks(): void;
    deleteTask(task:string): number;

}