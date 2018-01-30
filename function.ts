let tasks: Array<string> = [];

function addTask(task:string):number{
    tasks.push(task);
    
    console.log("Element " + task + " added to the array.")

    let count:number = tasks.length;
    return count;
}

function listAllTasks(){

     tasks.forEach(function(task){
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

function deleteTask(task:string): number{
    let key : string = task;
    let index : number = tasks.indexOf(key,0);

    if(index > -1){
        tasks.splice(index,1);
    }    

    return tasks.length;
}

addTask("test");
let x:number = addTask("Hello");
console.log("Count after add " + x);
listAllTasks();

let y:number = deleteTask("test");
console.log("Count after delete " + y);