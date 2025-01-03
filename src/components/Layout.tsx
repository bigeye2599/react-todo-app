import { PropsWithChildren, useState } from "react";

function Layout({ children }: PropsWithChildren) {
  const [direction, setDirection] = useState<"row" | "column">("column");

  console.log("layout rendered");

  return (
    <div style={{ display: "flex", flexDirection: direction }}>
      <div style={{ padding: "20px" }}>
        <h1>Todo app</h1>
        <button
          onClick={() =>
            setDirection((prev) => (prev === "row" ? "column" : "row"))
          }
        >
          레이아웃 변경
        </button>
      </div>
      {children}
    </div>
  );
}

export default Layout;
