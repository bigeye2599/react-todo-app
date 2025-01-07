import TodoInput from "../TodoInput";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./todoContainer.css";
import { addTodo, fetchTodoRequest } from "../../slices/todoSlice";
import { useDispatch } from "../../hooks/useRedux";

function TodoContainer() {
  const dispatch = useDispatch();

  console.log("todo container rendered");

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  return (
    <div>
      <TodoInput onAddTodo={(todo: string) => dispatch(addTodo({ todo }))} />
      <div>
        <NavLink
          className={({ isActive }) =>
            `todo-container__link ${isActive && "todo-container__link--active"}`
          }
          to="/"
        >
          all
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `todo-container__link ${isActive && "todo-container__link--active"}`
          }
          to="/active"
        >
          active
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `todo-container__link ${isActive && "todo-container__link--active"}`
          }
          to="/completed"
        >
          completed
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default TodoContainer;
