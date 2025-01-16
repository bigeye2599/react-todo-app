import TodoInput from "../TodoInput";
import { NavLink, Outlet } from "react-router-dom";
import "./todoContainer.css";
import { addTodo } from "../../slices/todoSlice";
import { useDispatch } from "../../hooks/useRedux";

function TodoContainerWithQuery() {
  const dispatch = useDispatch();

  console.log("todo container rendered");

  return (
    <div>
      <TodoInput onAddTodo={(todo: string) => dispatch(addTodo({ todo }))} />
      <div>
        <NavLink
          className={({ isActive }) =>
            `todo-container__link ${isActive && "todo-container__link--active"}`
          }
          to=""
          replace
          state={{
            filter: "all",
          }}
        >
          all
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `todo-container__link ${isActive && "todo-container__link--active"}`
          }
          to=""
          replace
          state={{
            filter: "active",
          }}
        >
          active
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `todo-container__link ${isActive && "todo-container__link--active"}`
          }
          to=""
          replace
          state={{
            filter: "completed",
          }}
        >
          completed
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default TodoContainerWithQuery;
