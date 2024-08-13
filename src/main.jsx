import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Login/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import PrivateRoutes from "./components/routes/PrivateRoutes.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        path: "/order",
        element: <PrivateRoutes><Orders/></PrivateRoutes>
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile/></PrivateRoutes>
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard/></PrivateRoutes>
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
