import {myQueue} from "./interface";

class myClass implements myQueue{
    tasks : Array<string> = [];

    addTask(task:string):number{
    this.tasks.push(task);
    
    console.log("Element " + task + " added to the array.")

    let count:number = this.tasks.length;
    return count;
}

     listAllTasks(){

     this.tasks.forEach(function(task){
        console.log(task)
    
     });

     // Another way of doing it
    /*
    for(let i of tasks)
    {
        console.log(i)
    }
    */

}

    deleteTask(task:string): number{
    let key : string = task;
    let index : number = this.tasks.indexOf(key,0);

    if(index > -1){
        this.tasks.splice(index,1);
    }    

    return this.tasks.length;
}
}

let newClass = new myClass();
newClass.addTask("Hello");
newClass.addTask("TypeScript");
newClass.listAllTasks();
newClass.deleteTask("Hello");