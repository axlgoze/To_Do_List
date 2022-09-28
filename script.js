( () => {

    const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const list = document.querySelector("[data-list]");

    const value = input.value;
    
    const task = document.createElement("li");
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    
    titleTask.classList.add("task");
    task.classList.add("card");
    titleTask.innerText = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    list.appendChild(task);

    const content = `
    ${checkComplete()}
    <span class="task">${value}</span>
    
    <i class="fas fa-trash-alt trashIcon icon"></i>`;

    // task.innerHTML = content;
    input.value= '';
}

btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square", "icon");
    i.addEventListener("click",completeTask);
    return i;
}

const completeTask = (event) =>{
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

}) ();