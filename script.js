const { writeTodos, readTodos } = require("./helper");

// Create a new todo
const createTodo = (title) => {
  const todos = readTodos();
  const newTodo = { id: Date.now(), title };
  todos.push(newTodo);
  writeTodos(todos)
    .then(() => console.log("Todo created:", newTodo),(error) => console.log(error));
};

// Read all todos
const readTodosAll = () => {
  const todos = readTodos();
  console.log("All Todos:", todos);
};

// Update a todo
const updateTodo = (id, updatedTitle) => {
  const todos = readTodos();
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex].title = updatedTitle;
    writeTodos(todos);
    console.log("Todo updated:", todos[todoIndex]);
  } else {
    console.log("Todo not found");
  }
};

// Delete a todo
const deleteTodo = (id) => {
  const todos = readTodos();
  const newTodos = todos.filter((todo) => todo.id !== id);
  if (todos.length !== newTodos.length) {
    writeTodos(newTodos);
    console.log("Todo deleted");
  } else {
    console.log("Todo not found");
  }
};

module.exports = {
  createTodo,
  readTodosAll,
  updateTodo,
  deleteTodo,
};
