import { useState } from "react";
import TodoAppList from "./TodoAppList";
import TodoAppForm from "./TodoAppForm";

const todoDate = [
  {
    id: 1,
    title: "Get tea from Alireza",
    completed: false,
  },
  {
    id: 2,
    title: "build react todo list",
    completed: true,
  },
  {
    id: 3,
    title: "learn javascript",
    completed: true,
  },
];

export default function TodoApp() {
  const [todoList, setTodoList] = useState(todoDate);

  function handleAddTodo(todo) {
    setTodoList((curList) => [...curList, todo]);
  }

  function handleDeleteTodo(id) {
    const confirmed = window.confirm(
      `Are you sure you want to delete the < ${
        todoList.find((item) => item.id === id).title
      } > item?`
    );

    confirmed &&
      setTodoList((curList) => curList.filter((item) => item.id !== id));
  }

  function handleUpdateCompleted(id) {
    setTodoList((curList) =>
      curList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleUapdateTitle(id, title) {
    setTodoList((curList) =>
      curList.map((item) => (item.id === id ? { ...item, title } : item))
    );
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoAppForm onAddTodo={handleAddTodo} />
      <TodoAppList
        todoList={todoList}
        onDeleteTodo={handleDeleteTodo}
        onUpdateCompleted={handleUpdateCompleted}
        onUpdateTitle={handleUapdateTitle}
      />
    </div>
  );
}
