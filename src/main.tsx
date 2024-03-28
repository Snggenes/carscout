import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import UserProvider from "./contexts/userContext";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserProvider>
);
