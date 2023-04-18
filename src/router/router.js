// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Otp from "../pages/Otp";

const Routing = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/profile",
  //     element: <Profile />,
  //   },
  //   {
  //     path: "/confirmotp",
  //     element: <Otp />,
  //   },
  // ]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/confirmotp" element={<Otp />} />
      </Routes>
    </>
  );
  // <RouterProvider router={router} />
};

export default Routing;
