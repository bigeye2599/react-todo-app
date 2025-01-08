import Checkbox from "./Checkbox";
import { Todo } from "../types";
import { toggleTodo } from "../slices/todoSlice";
import { useDispatch, useSelector } from "../hooks/useRedux";
import { useParams } from "react-router-dom";

export default function TodoList() {
  const { filter = "all" } = useParams<{
    filter?: "all" | "active" | "completed";
  }>();

  const filteredTodos = useSelector((state) => {
    const filteredTodo = filterTodos(state.todo.todos, filter);
    return filteredTodo;
  });
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            id={`todo-${todo.id}`}
            checked={todo.done}
            label={todo.text}
            onChange={() => dispatch(toggleTodo({ id: todo.id }))}
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
