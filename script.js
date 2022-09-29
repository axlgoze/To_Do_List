import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
// ( () => {

    const btn = document.querySelector("[data-form-btn]");
// Agregar la tarea
const addTasK = (evento) => {
    const list = document.querySelector("[data-list]");
    // llamada a la funcion
    const task = createTask(evento);
    list.appendChild(task);
}
// crear estructura HTML
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    const date=calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    
    const value = input.value;
    
    const dateElement= document.createElement("span");
    dateElement.innerHTML = dateFormat;
    
    const taskContent = document.createElement("div");
    const task = document.createElement("li");
    const titleTask = document.createElement("span");

    
    titleTask.classList.add("task");
    task.classList.add("card");
    titleTask.innerText = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    

    input.value= '';
    return task;
}

btn.addEventListener("click", addTasK);
// }) ();