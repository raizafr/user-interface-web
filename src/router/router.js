import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Otp from "../pages/Otp";
import { RecoilRoot } from "recoil";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/confirmotp",
      element: <Otp />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
