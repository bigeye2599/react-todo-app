import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
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
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
