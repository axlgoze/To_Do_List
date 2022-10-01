import { displayTasks } from "./ displayTasks.js";
const deleteIcon = (id) =>{
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",() => deleteTask(id));
    return i;
}

const deleteTask = (id) =>{
    const li = document.querySelector("[data-list]");
    const tasks = JSON.parse(localStorage.getItem("Task"));
    const index=tasks.findIndex((item)=> item.id === id);
    console.log(index);
    const newTasks = tasks.splice(index,1);
    li.innerHTML = "";
    console.log(newTasks);
    localStorage.setItem("Task",JSON.stringify(tasks));
    displayTasks();

}

export default deleteIcon;