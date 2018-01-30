"use strict";
var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Element " + task + " added to the array.");
    var count = tasks.length;
    return count;
}
function listAllTasks() {
    tasks.forEach(function (task) {
        console.log(task);
    });
    // Another way of doing it
    /*
    for(let i of tasks)
    {
        console.log(i)
    }
    */
}
function deleteTask(task) {
    var key = task;
    var index = tasks.indexOf(key, 0);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    return tasks.length;
}
addTask("test");
var x = addTask("Hello");
console.log("Count after add " + x);
listAllTasks();
var y = deleteTask("test");
console.log("Count after delete " + y);
