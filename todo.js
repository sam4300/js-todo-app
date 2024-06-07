const todos = [
  {
    name: "Samar",
    dueDate: "2022-6-7",
  },
  {
    name: "Samar",
    dueDate: "2022-6-7",
  },
];

renderTodo();

function renderTodo() {
  let todoElements = "";

  const divElement = document.querySelector(".todo-lists");

  for (let i = 0; i < todos.length; i++) {
    todoObject = todos[i];
    const { name, dueDate } = todoObject;
    todoElements += `
    <div>
      ${name}
    </div>
    <div>
      ${dueDate}
    </div>
      <button class = "delete-button" onClick = "deleteTodo(${i})"
            ">
          Delete
        </button> 
      `;
  }

  divElement.innerHTML = todoElements;
}
function deleteTodo(i) {
  todos.splice(i, 1);
  renderTodo();
}

function addTodo() {
  const todoInputElement = document.querySelector(".todo-name");
  const name = todoInputElement.value;
  const dueDate = document.querySelector(".js-date").value;

  if (name) {
    todos.push({
      name,
      dueDate,
    });
  }

  renderTodo();
}
