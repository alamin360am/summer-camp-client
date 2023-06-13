import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home/Home";
import Instructors from "./Pages/Instructors/Instructors";
import Classes from "./Pages/Classes/Classes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import AuthProvider from "./Providers/AuthProvider";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import DashboardLayout from "./Layouts/DashboardLayout";
import SelectedClass from "./Pages/Dashboard/SelectedClass/SelectedClass";
import PrivateRoutes from "./Routes/PrivateRoutes";
import EnrollClass from "./Pages/Dashboard/Enroll Classes/EnrollClass";
import Payment from "./Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        path: '',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'selected-classes',
        element: <SelectedClass></SelectedClass>
      },
      {
        path: 'enroll',
        element: <EnrollClass></EnrollClass>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl mx-auto p-4 md:p-0">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
