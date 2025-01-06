import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import TodoContainer from "./components/TodoContainer";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TodoContainer />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);

export default router;
