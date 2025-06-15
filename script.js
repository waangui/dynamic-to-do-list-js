
document.addEventListener('DOMContentLoaded', function () {

// DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById ("task-input");
    const taskList = document.getElementById("task-list");


    function addTask(){
        // get trimmed value

        const taskText = taskInput.value.trim();

        // check if empty

        if (!taskText){
            alert("Please enter a task!");
        }
    }

})