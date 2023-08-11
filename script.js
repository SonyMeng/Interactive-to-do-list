//Things to do
//create new task function
//li with checkbox and delete button
//checkbox makes text style line-through or none
//delete btn
//clear all btn
document.addEventListener("DOMContentLoaded", function () {
  const taskInputId = "newTask";
  const taskListId = "myList";
  const clearAllButtonId = "clearAllButton";
  const addTaskButtonId = "addTaskButton";

  function getTaskValue() {
    const taskInput = document.getElementById(taskInputId);
    const taskValue = taskInput.value.trim();
    taskInput.value = "";
    return taskValue;
  }

  function createSpan(value) {
    const spanElement = document.createElement("span");
    spanElement.className = "task-text";
    spanElement.innerText = value;
    return spanElement;
  }

  function createCheckBox() {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checkBox";
    return checkBox;
  }

  function createDeleteButton(listItem) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("deleteButton");
    const taskList = document.getElementById(taskListId);
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });
    return deleteButton;
  }

  function addTask() {
    const taskValue = getTaskValue();
    if (!taskValue) return;

    const taskList = document.getElementById(taskListId);
    const taskListItem = document.createElement("li");
    taskListItem.className = "task-item";
    const spanElement = createSpan(taskValue);
    const deleteButton = createDeleteButton(taskListItem);
    const checkBox = createCheckBox();
    checkBox.addEventListener("change", function () {
      spanElement.style.textDecoration = checkBox.checked
        ? "line-through"
        : "none";
    });
    taskListItem.appendChild(checkBox);
    taskListItem.appendChild(spanElement);
    taskListItem.appendChild(deleteButton);

    taskList.appendChild(taskListItem);
  }

  function clearAll() {
    const taskList = document.getElementById(taskListId);
    taskList.innerHTML = "";
  }

  document.getElementById(clearAllButtonId).onclick = clearAll;
  document.getElementById(addTaskButtonId).onclick = addTask;
});
