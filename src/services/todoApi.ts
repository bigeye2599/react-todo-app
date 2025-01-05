import { Todo } from "../types";

export const getTodos = () => {
  return new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      return resolve([
        { id: 1, text: "Buy milk", done: false },
        { id: 2, text: "Buy eggs", done: true },
        { id: 3, text: "Buy bread", done: false },
      ]);
    }, 1000);
  });
};
