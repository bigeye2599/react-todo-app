import Checkbox from "./Checkbox";
import { useAtomValue, useSetAtom } from "jotai";
import { todosAtom, toggleTodoAtom } from "../store";
import { Todo } from "../types";
import { useParams } from "react-router-dom";

export default function TodoList() {
  const todos = useAtomValue(todosAtom);
  const toggleTodo = useSetAtom(toggleTodoAtom);
  const { filter = "all" } = useParams<{
    filter?: "all" | "active" | "completed";
  }>();

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

function filterTodos(todos: Todo[], filter: "all" | "active" | "completed") {
  if (filter === "active") {
    return todos.filter((todo) => !todo.done);
  } else if (filter === "completed") {
    return todos.filter((todo) => todo.done);
  }

  return todos;
}
