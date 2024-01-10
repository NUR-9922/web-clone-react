import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import ErrorPage from './pages/ErrorPages.jsx'
import Courses from "./components/Courses/Courses.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <div>about</div>,
      },
      {
        path: "blog",
        element: <div>blog</div>,
      },
      {
        path : 'courses',
        element : <Courses/>
      },
      {
        path: "cart",
        element: <div>cart</div>,
      }
    ],
   
  },
  {
    path: "contact",
    element: <div>contact</div>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "Signup",
    element: <SignUp/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
