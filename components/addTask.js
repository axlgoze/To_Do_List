import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

import { displayTasks } from "./ displayTasks.js";

// Agregar la tarea
export const addTasK = (evento) => {
    evento.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date=calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if(value == "" || date == ""){
        //no ejecuta y regresa
        return
    }

    input.value= '';
    calendar.value= '';

    const taskObject = {
        value,
        dateFormat
    }

    list.innerHTML="";
    // pipe operator
    const taskList = JSON.parse(localStorage.getItem("Task")) || [];
    taskList.push(taskObject);
    localStorage.setItem('Task', JSON.stringify(taskList));
    // llamada a la funcion
    displayTasks();
    // const task = createTask(taskObject);
    // list.appendChild(task);
}

// crear estructura HTML
export const createTask = ({value,dateFormat}) => {
    const dateElement= document.createElement("span");
    const taskContent = document.createElement("div");
    const task = document.createElement("li");
    const titleTask = document.createElement("span");
    
            dateElement.innerHTML = dateFormat;
            titleTask.classList.add("task");
            task.classList.add("card");
            titleTask.innerText = value;

            taskContent.appendChild(checkComplete());
            taskContent.appendChild(titleTask);

            task.appendChild(taskContent);
            task.appendChild(dateElement);
            task.appendChild(deleteIcon());
    return task;
}