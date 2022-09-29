import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
// ( () => {

    const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const list = document.querySelector("[data-list]");

    const value = input.value;
    
    const taskContent = document.createElement("div");
    const task = document.createElement("li");
    const titleTask = document.createElement("span");

    
    titleTask.classList.add("task");
    task.classList.add("card");
    titleTask.innerText = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);

    input.value= '';
}

btn.addEventListener("click", createTask);
// }) ();