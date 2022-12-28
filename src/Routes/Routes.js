import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CompletedTask from "../pages/CompletedTask/CompletedTask";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyTask from "../pages/MyTask/MyTask";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-task",
        element: <MyTask></MyTask>,
      },
      {
        path: "/completed-task",
        element: <CompletedTask></CompletedTask>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/sign-in",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
