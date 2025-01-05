import { create } from "zustand";
import { Todo } from "./types";
import { getTodos } from "./services/todoApi";

interface TodoState {
  todos: Todo[];
  addTodo: (newTodo: string) => void;
  toggleTodo: (id: number) => void;
  fetchTodos: () => Promise<void>;
}

const useStore = create<TodoState>()((set) => ({
  todos: [],
  addTodo: (newTodo) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text: newTodo,
          done: false,
        },
      ],
    }));
  },
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }));
  },
  fetchTodos: async () => {
    const todos = await getTodos();
    set({ todos });
  },
}));

export default useStore;
