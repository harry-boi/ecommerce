const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

const emptyMessage = document.querySelector('#empty-message');
const taskCount = document.querySelector("#task-count");

function updateTaskSummary(){
    const total = taskList.children.length;
    taskCount.textContent = `Total tasks: ${total}`

    if(total === 0){
        emptyMessage.hidden = false;
    } else{
        emptyMessage.hidden = true;
    }
}

taskForm.addEventListener("submit", (event)=>{
    console.log("reached here");
    event.preventDefault();
    const taskText = taskInput.value.trim();

    //prevent empty tasks
    if(taskText === ""){
        taskInput.focus();
        return;
    }

    const item = document.createElement("li");
    item.className = "task-item";

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "🗑️"
    deleteButton.addEventListener("click", function(){
        item.remove()
        updateTaskSummary()
    })

    const completeButton = document.createElement("button");
    completeButton.type = "button";
    completeButton.className = "complete-button";
    completeButton.textContent = "✅";

    completeButton.addEventListener("click", function(){
        item.classList.toggle("completed");
    })

    actions.append(completeButton, deleteButton);

    item.append(taskLabel, actions);

    taskInput.value = "";
    taskList.append(item);
    updateTaskSummary();
})
