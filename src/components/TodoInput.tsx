import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

export default function TodoInput({ onAddTodo }: TodoInputProps) {
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    console.log("onAddTodo changed!");
  }, [onAddTodo]);

  const addTodo = () => {
    onAddTodo(newTodo);
    setNewTodo("");
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (text: string) => {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(text);
        }, 1000);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => {},
  });

  console.log("todo input rendered");

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.currentTarget.value)
        }
      />
      <button onClick={() => mutation.mutate(newTodo)}>추가</button>
    </div>
  );
}
