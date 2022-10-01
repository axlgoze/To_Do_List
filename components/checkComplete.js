const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square", "icon");
    i.addEventListener("click",(event)=>completeTask(event,id));
    return i;
}

const completeTask = (event,id) =>{
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
    console.log("check id", id);
    const tasks = JSON.parse(localStorage.getItem("Task"));
    const index = tasks.findIndex( item => item.id === id);
    // modificar estado
    tasks[index]["complete"] = !tasks[index]["complete"];
    // actualizacion
    localStorage.setItem("Task",JSON.stringify(tasks));
}

export default checkComplete;