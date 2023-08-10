//Things to do
//create new task function
//li with checkbox and delete button
//checkbox makes text style line-through or none
//delete btn
//clear all btn

function addTask() {
  let taskValue = document.getElementById("newTask");
  taskValue = taskValue.value.trim();

  if (taskValue == "") return;

  let taskList = document.getElementById("myList");
  let taskListItem = document.createElement("li");
  taskListItem.classList.add("task-item");

  let spanElement = document.createElement("span");
  spanElement.classList.add("task-text");
  spanElement.innerText = taskValue;

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("checkBox");
  checkBox.addEventListener("change", function () {
    spanElement.style.textDecoration = checkBox.checked
      ? "line-through"
      : "none";
  });

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskListItem);
  });

  taskListItem.appendChild(checkBox);
  taskListItem.appendChild(spanElement);
  taskListItem.appendChild(deleteButton);

  taskList.appendChild(taskListItem);
  document.getElementById("newTask").value = "";
}
function clearAll() {
  const taskList = document.getElementById("myList");
  taskList.innerHTML = "";
}

document.getElementById("clearAllButton").onclick = clearAll;
document.getElementById("addTaskButton").onclick = addTask;
