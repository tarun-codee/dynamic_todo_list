function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    checkbox.onchange = () => {
        span.classList.toggle("completed");
        updateCounter();
    };

    let editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.onclick = () => {
        let newText = prompt("Edit task:", span.textContent);
        if (newText && newText.trim() !== "") {
            span.textContent = newText.trim();
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => {
        li.remove();
        updateCounter();
    };

    let actions = document.createElement("div");
    actions.className = "actions";

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    updateCounter();
}

function updateCounter() {
    let tasks = document.querySelectorAll("li");
    let completed = document.querySelectorAll(".completed");

    document.getElementById("taskCounter").textContent =
        `Total: ${tasks.length} | Done: ${completed.length}`;
}