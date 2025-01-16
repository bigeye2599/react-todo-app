import Checkbox from "./Checkbox";
import { Todo } from "../types";
import { useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos } from "../services/todoApi";

export default function TodoListWithQuery() {
  const location = useLocation();
  const filter = location.state?.filter ?? "all";

  const { isLoading, data: todos = [] } = useQuery({
    queryKey: ["todos", filter],
    queryFn: async () => {
      const todos = await getTodos();
      return filterTodos(todos, filter);
    },
  });

  const queryClient = useQueryClient();

  const handleToggleTodo = (id: number) => {
    queryClient.setQueryData(["todos", filter], (todos: Todo[]) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: ~todo.done } : todo
      )
    );
  };

  // const filteredTodos = useSelector((state) => {
  //   const filteredTodo = filterTodos(state.todo.todos, filter);
  //   return filteredTodo;
  // });

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            id={`todo-${todo.id}`}
            checked={todo.done}
            label={todo.text}
            onChange={() => handleToggleTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

function filterTodos(todos: Todo[], filter: "all" | "active" | "completed") {
  if (todos.length === 0) {
    return todos;
  }

  if (filter === "active") {
    return todos.filter((todo) => !todo.done);
  } else if (filter === "completed") {
    return todos.filter((todo) => todo.done);
  }

  return todos;
}
