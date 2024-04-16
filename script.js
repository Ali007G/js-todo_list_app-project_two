// work on progress
const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addToDoBtn.addEventListener("click",()=>{
    const newToDoText = newTodoInput.value;
    if(newToDoText!=="") {
        const newToDoItem = document.createElement("li");
        newToDoItem.innerText = newToDoText;
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";

        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click", function(){
            newToDoItem.remove();
        });

        newToDoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newToDoItem);
        newTodoInput.value = "";
    }

})
