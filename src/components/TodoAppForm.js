import { useState } from "react";

export default function TodoAppForm({ onAddTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;

    const id = crypto.randomUUID();

    const newTodo = { id, title, completed: false };

    onAddTodo(newTodo);

    setTitle("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="todo-button">Add</button>
    </form>
  );
}
