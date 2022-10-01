import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

import { displayTasks } from "./ displayTasks.js";
import { uniqueDates } from "../services/date.js";

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

    const complete = false; 

    const taskObject = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
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
export const createTask = ({value,dateFormat,complete,id}) => {
    const dateElement= document.createElement("span");
    const taskContent = document.createElement("div");
    const task = document.createElement("li");
    const titleTask = document.createElement("span");
    const check =checkComplete(id);
    if(complete){
        console.log("completada");
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }
    
            dateElement.innerHTML = dateFormat;
            titleTask.classList.add("task");
            task.classList.add("card");
            titleTask.innerText = value;

            taskContent.appendChild(check);
            taskContent.appendChild(titleTask);

            task.appendChild(taskContent);
            task.appendChild(dateElement);
            task.appendChild(deleteIcon(id));
    return task;
}