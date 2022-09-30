import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

// Agregar la tarea
export const addTasK = (evento) => {
    const list = document.querySelector("[data-list]");
    // llamada a la funcion
    const task = createTask(evento);
    list.appendChild(task);
}

// crear estructura HTML
const createTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("Task")) || [];
    console.log(taskList)
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
    
    console.log(value, dateFormat);
    const taskObject = {
        value,
        dateFormat
    }

    taskList.push(taskObject);

    localStorage.setItem('Task', JSON.stringify(taskList));

    input.value= '';
    return task;
}