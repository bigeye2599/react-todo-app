import { ChangeEvent, useEffect, useMemo, useState } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const generateLargeDataset = (size: number) => {
  return Array.from({ length: size }, (_, i) => ({
    id: i + 1,
    text: `할 일 ${i + 1}`,
    done: i % 2 === 0,
  }));
};

const largeDataset = generateLargeDataset(10_000);

export default function TodoInput({ onAddTodo }: TodoInputProps) {
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    console.log("onAddTodo changed!");
  }, [onAddTodo]);

  const addTodo = () => {
    onAddTodo(newTodo);
    setNewTodo("");
  };

  const filteredLargeDataset = useMemo(() => {
    console.log("filtering large dataset...");
    return largeDataset.filter((todo) => todo.done);
  }, []);

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
      <button onClick={addTodo}>추가</button>
    </div>
  );
}
