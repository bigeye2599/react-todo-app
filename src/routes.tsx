import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy, PropsWithChildren, Suspense } from "react";
import { getUser } from "./services/userApi";
import Login from "./components/Login";
import { useAtomValue } from "jotai";
import { userAtom } from "./store";

const LazyTodoList = lazy(() => import("./components/TodoList"));

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

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
      {
        path: "/protected",
        element: (
          <ProtectedRoute>
            <div>Protected</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
