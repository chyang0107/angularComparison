var inputEl = document.querySelector('input')
var buttonEl = document.querySelector('button')
var ulEl = document.querySelector('ul')
var todos = []
buttonEl.addEventListener('click', addTodo)


function addTodo(){
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: Math.random(), value:userInput}
    todos.push(newTodo)
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', removeTodo)
    todoLi.dataset.id = newTodo.id

    ulEl.appendChild(todoLi);
}

function removeTodo(event) {
    var clickedLi = event.target;
    // removeChild should be invoked on the parent, i.e.:
    var itemid = clickedLi.dataset.id
    for (var i = 0; i<todos.length; i++){
        if(todos[i].id ==itemid){
            todos.splice(i,1);
            break;
        }
    }
    clickedLi.parentNode.removeChild(clickedLi);
  }