import { Todo } from "../types";

export const getTodos = () => {
  return new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      return resolve([
        {
          id: 1,
          text: "Learn React",
          done: true,
        },
        {
          id: 2,
          text: "Learn Reduxt",
          done: false,
        },
      ]);
    }, 1000);
  });
};
