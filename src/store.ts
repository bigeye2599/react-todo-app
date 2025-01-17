import { atom } from "jotai";
import { Todo } from "./types";
import { getTodos } from "./services/todoApi";

const idAtom = atom(0);

const incrementId = atom(null, (get, set) => {
  set(idAtom, get(idAtom) + 1);
});

export const todosAtom = atom<Todo[]>([]);

export const addTodoAtom = atom(null, (get, set, newTodo: string) => {
  set(todosAtom, (prev) => [
    ...prev,
    {
      id: get(idAtom),
      text: newTodo,
      done: false,
    },
  ]);
  set(incrementId);
});

export const toggleTodoAtom = atom(null, (_, set, id: number) => {
  set(todosAtom, (prev) =>
    prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
  );
});

export const fetchTodosAtom = atom(null, async (_, set) => {
  const todos = await getTodos();
  set(todosAtom, todos);
});

export const userAtom = atom<{ username: string } | null>(null);
