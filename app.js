
const inputField = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-todo");
const tasks = document.querySelector(".task");
const check = document.querySelector(".button-1");
let ol = document.createElement("ol");
let li = document.createElement("li");
const ol = document.querySelector(".todo-items");
let p = document.createElement("p");
let div = document.createElement("div");
let button1 = document.createElement("button");
let button2 = document.createElement("button");

addButton.addEventListener("click", myfunc);

function myfunc() {
    p.textContent = inputField.value
    button1.textContent = '✓'
    button2.textContent = 'x'
    button1.classList.add('button-1')
    button2.classList.add('button-2')
    li.classList.add('task')
    div.appendChild(button1)
    div.appendChild(button2)
    li.appendChild(p)
    li.appendChild(div)
    ol.insertAdjacentElement('beforeend', li)
    ol.innerHTML += li
}

button2.addEventListener('click', function (event) {
    event.preventDefault()
    const target = event.target.parentNode.previousElementSibling.textContent
    const lis = document.querySelectorAll('.task')

    lis.forEach(element => {
        if (element.children[0].textContent == target) {
            element.remove();
  
        }
    });
})



















