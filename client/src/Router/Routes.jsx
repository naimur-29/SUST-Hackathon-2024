import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import Error from "../pages/Error";
import RootPage from "./RootPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Test from "../pages/Test";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import LearningGrounds from "../pages/Dashboard/LearningGrounds";

export const PageRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/learningGrounds",
        element: <LearningGrounds />,
      },
    ],
  },

  {
    path: "/*",
    element: <Error />,
  },
]);
