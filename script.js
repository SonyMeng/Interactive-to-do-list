// Function to add a task
function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') return; // Don't add empty tasks
  
    const taskList = document.getElementById('myList');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item'; // Apply the class
  
    // Create a checkbox to mark the task as complete
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      taskItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });
  
    // Create a button to delete the task
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });
  
    // Append the checkbox, task text, and delete button to the task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(` ${taskText} `));
    taskItem.appendChild(deleteButton);
  
    // Append the task item to the task list
    taskList.appendChild(taskItem);
  
    // Clear the task input
    taskInput.value = '';
  }
  
  // Function to clear all tasks
  function clearAllTasks() {
    const taskList = document.getElementById('myList');
    taskList.innerHTML = '';
  }
  
  // Event listeners for the buttons
  document.getElementById('addButton').addEventListener('click', addTask);
  document.getElementById('clearAllButton').addEventListener('click', clearAllTasks);
  
  // Optional: Add an event listener to add a task when pressing Enter
  document.getElementById('newTask').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') addTask();
  });
  