let total = 0
const addButton = document.querySelector(".add-todo");

addButton.addEventListener("click", myfunc);

function myfunc() {
    const inputField = document.querySelector(".todo-input");
    const todos = document.querySelector(".todo-items");

    todos.innerHTML += `<li class="task">
        <p>${inputField.value}</p>
        <div>
            <button class="button-1" onclick="completeTodo(event)">✓</button>
            <button class="button-2" onclick="deleteTodo(event)">𝑥</button>
        </div>
    </li>`

    inputField.value = '' 
    totalTodos()
    
}

function deleteTodo (event) {
    event.preventDefault()

    const target = event.target.parentNode.previousElementSibling.textContent

    const listOfTodos = document.querySelectorAll('.task')

    listOfTodos.forEach(element => {
        if (element.children[0].textContent == target) {
            element.remove();
        }
    });

    totalTodos()
}


function totalTodos() {
    const todos = document.querySelectorAll(".task");
    const todoCount = document.querySelector('.todo-count')

    todoCount.textContent = todos.length
}



function completeTodo (event) {
    
     const completed = document.querySelector(".total-completed");
     const target = event.target.parentNode.previousElementSibling.textContent
     const listOfTodos = document.querySelectorAll('.task')

      listOfTodos.forEach(element => {
          if (element.children[0].textContent == target) {
              element.style.color = "lightgrey";
              total++
              completed.textContent=total
              console.log(total)
          }
      });

        
   
 }




 