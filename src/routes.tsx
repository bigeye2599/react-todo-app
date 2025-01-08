import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy, Suspense } from "react";

const LazyTodoList = lazy(() => import("./components/TodoList"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const { default: TodoContainer } = await import(
            "./components/TodoContainer/TodoContainer"
          );
          return { Component: TodoContainer };
        },
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyTodoList />
              </Suspense>
            ),
          },
          {
            path: "/:filter",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyTodoList />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);

export default router;
