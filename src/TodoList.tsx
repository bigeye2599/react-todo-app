import Checkbox from "./Checkbox";
import { Todo } from "./types";

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
}

export default function TodoList({ todos, onToggleTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            id={`todo-${todo.id}`}
            checked={todo.done}
            label={todo.text}
            onChange={() => onToggleTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}
