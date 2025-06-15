
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
            return;
        } 
        
        // new task
        const li= document.createElement('li');
        li.textContent = taskText;

        // remove button

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // on-click event for button

        removeButton.onclick = function(){
            taskList.removeChild(li);
        };

        // append remove button and li

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // clear task input value

        taskInput.value= '';

        
    }

})