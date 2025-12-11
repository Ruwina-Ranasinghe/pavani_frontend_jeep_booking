import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./hoc/AppLayout.tsx";

// pages
import Login from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound.tsx";
import {Home} from "./pages/Dashboard";


export const router = createBrowserRouter([
    {
        path: "/app",
        element: <AppLayout />,
        children: [
            {
                path: "dashboard",
                element: <Home/>,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/not-found",
        element: <NotFound />,
    },
    {
        path: "/",
        element: <Navigate to="/login" replace />,
    },
    {
        path: "*",
        element: <Navigate to="/not-found" replace />,
    },
]);
