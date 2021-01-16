var inputEl = document.querySelector('input')
var buttonEl = document.querySelector('button')
var ulEl = document.querySelector('ul')
buttonEl.addEventListener('click', addTodo)

function addTodo(){
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', removeTodo)
    ulEl.appendChild(todoLi);
}

function removeTodo(event) {
    var clickedLi = event.target;
    // removeChild should be invoked on the parent, i.e.:
    clickedLi.parentNode.removeChild(clickedLi);
  }