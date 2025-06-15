
document.addEventListener('DOMContentLoaded', function () {

// DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById ("task-input");
    const taskList = document.getElementById("task-list");
    let tasks = []

    //Load Tasks
    function loadTasksFromStorage() {
        const savedTasks = localStorage.getItem('tasks');
        
        // check for tasks
        if (savedTasks){
            const tasks = JSON.parse(savedTasks);

            // recreate tasks in DOM

            tasksArray.forEach(task => {
            const li = document.createElement('li');
            li.classList.add('task-item');
            li.textContent= task.text;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');

            removeBtn.addEventListener('click', function() {

                // remove from DOM
                taskList.removeChild(li);

                // remove from array
                tasks = tasks.filter(t => t.text !== task.text);
                
                // update local storage
                localStorage.setItem('tasks', JSON.stringify(tasks));
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);
        });


    }

    
    

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

        // Event listeners 

        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function(event){
            if (event.key === 'Enter') {
                addTask();
            }

        })
 
    }

    // Invoke function
    addTask();
})