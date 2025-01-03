import { useCallback, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Todo } from "../types";

function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((newTodo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        text: newTodo,
        done: false,
      },
    ]);
  }, []);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };

  console.log("todo container rendered");

  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoContainer;
