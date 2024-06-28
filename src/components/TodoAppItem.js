import { useState } from "react";
import Button from "./Button";

export default function TodoAppItem({
  todo,
  onDeleteTodo,
  onUpdateCompleted,
  onUpdateTitle,
}) {
  const [isEditting, setIsEditting] = useState(false);
  const [title, setTitle] = useState("");

  function handleSave() {
    if (!title) {
      alert("Title can not be empty!");
      return;
    }

    setIsEditting((cur) => !cur);

    onUpdateTitle(todo.id, title);
  }

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditting ? (
        <input
          className="edit-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <div>
        {isEditting ? (
          <Button bgColor="#007bff" textColor="#fff" onClick={handleSave}>
            Save
          </Button>
        ) : (
          <>
            <Button
              bgColor="#ffc107"
              textColor="#fff"
              onClick={() => setIsEditting((cur) => !cur)}
            >
              Edit
            </Button>
            <Button
              bgColor="#dc3545"
              textColor="#fff"
              onClick={() => onDeleteTodo(todo.id)}
            >
              Delete
            </Button>
            <Button
              bgColor="#28a745"
              textColor="#fff"
              onClick={() => onUpdateCompleted(todo.id)}
            >
              Complete
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
