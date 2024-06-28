import TodoAppItem from "./TodoAppItem";

export default function TodoAppList({
  todoList,
  onDeleteTodo,
  onUpdateCompleted,
  onUpdateTitle,
}) {
  return (
    <div className="todo-list">
      {todoList.map((todo) => (
        <TodoAppItem
          todo={todo}
          key={todo.title}
          onDeleteTodo={onDeleteTodo}
          onUpdateCompleted={onUpdateCompleted}
          onUpdateTitle={onUpdateTitle}
        />
      ))}
    </div>
  );
}
