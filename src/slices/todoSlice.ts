import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

interface TodoState {
  todos: Todo[];
  status: "idle" | "loading" | "failed" | "succeeded";
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  status: "idle",
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ todo: string }>) => {
      state.todos.push({
        id: state.todos.length + 1,
        text: action.payload.todo,
        done: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.done = !todo.done;
      }
    },
    fetchTodoRequest: (state) => {
      state.status = "loading";
    },
    fetchTodoSuccess: (state, action: PayloadAction<{ todos: Todo[] }>) => {
      state.status = "succeeded";
      state.todos = action.payload.todos;
    },
    fetchTodoFailure: (state, action: PayloadAction<{ error: string }>) => {
      state.status = "failed";
      state.error = action.payload.error;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoFailure,
} = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
