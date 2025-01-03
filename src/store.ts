import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

function createStore() {
  const store = configureStore({
    reducer: {
      todo: todoReducer,
    },
  });

  return store;
}

const store = createStore();

export default store;
