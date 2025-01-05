import { useCallback, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "../hooks/useRedux";
import { addTodo, fetchTodoRequest, toggleTodo } from "../slices/todoSlice";

function TodoContainer() {
  const { todos } = useSelector((state) => ({ todos: state.todo.todos }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  const handleAddTodo = useCallback(
    (newTodo: string) => {
      dispatch(addTodo({ todo: newTodo }));
    },
    [dispatch]
  );

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo({ id }));
  };

  console.log("todo container rendered");

  return (
    <div>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
    </div>
  );
}

export default TodoContainer;
