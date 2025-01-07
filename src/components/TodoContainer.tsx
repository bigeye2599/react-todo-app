import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useAtom, useSetAtom } from "jotai";
import {
  addTodoAtom,
  fetchTodosAtom,
  todosAtom,
  toggleTodoAtom,
} from "../store";
import { useEffect } from "react";

function TodoContainer() {
  const [todos] = useAtom(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const toggleTodo = useSetAtom(toggleTodoAtom);
  const fetchTodos = useSetAtom(fetchTodosAtom);

  console.log("todo container rendered");

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoContainer;
