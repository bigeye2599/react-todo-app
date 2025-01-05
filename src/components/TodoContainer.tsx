import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import useStore from "../useStore";
import { useEffect } from "react";

function TodoContainer() {
  const { todos, addTodo, toggleTodo, fetchTodos } = useStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  console.log("todo container rendered");

  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoContainer;
