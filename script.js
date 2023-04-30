const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

addTaskBtn.addEventListener("click", () => {
    const taskValue = taskInput.value.trim();
    if (taskValue !== "") {
       
        createTask(taskValue);
        taskInput.value = "";
    }
});

function createTask(taskValue) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        taskText.classList.toggle("completed");
    });
    li.appendChild(checkbox);

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = taskValue;
    li.appendChild(taskText);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
        totalTasks -= 1;
        updateTaskCount();
    });
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    totalTasks += 1;
    updateTaskCount();
}

function updateTaskCount() {
    taskCount.textContent = `Total tasks: ${totalTasks}`;
}
