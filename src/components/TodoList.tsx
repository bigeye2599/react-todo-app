import Checkbox from "./Checkbox";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { todosAtom, toggleTodoAtom } from "../store";
import { Todo } from "../types";

interface TodoListProps {
  filter?: "all" | "active" | "completed";
}

export default function TodoList({ filter }: TodoListProps) {
  const todos = useAtomValue(todosAtom);
  const toggleTodo = useSetAtom(toggleTodoAtom);

  const filteredTodos = filterTodos(todos, filter);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            id={`todo-${todo.id}`}
            checked={todo.done}
            label={todo.text}
            onChange={() => toggleTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

function filterTodos(todos: Todo[], filter: TodoListProps["filter"]) {
  if (filter === "active") {
    return todos.filter((todo) => !todo.done);
  } else if (filter === "completed") {
    return todos.filter((todo) => todo.done);
  }

  return todos;
}
