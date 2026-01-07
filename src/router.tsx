import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./hoc/AppLayout.tsx";

// pages
import Login from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound.tsx";
import {Home} from "./pages/Dashboard";
import {Booking} from "./pages/Booking";
import {Contact} from "./pages/Contact";
import {BookingConfirmation} from "./pages/Booking/BookingConfirmation.tsx";
import {Payment} from "./pages/Booking/Payment.tsx";
import {SearchJeeps} from "./pages/Jeep";
import AdminDashboard from "./pages/Admin";
import {OperatorDashboard} from "./pages/operator";


export const router = createBrowserRouter([
    {
        path: "/app",
        element: <AppLayout />,
        children: [
            {
                path: "dashboard",
                element: <Home/>,
            },
            { path: "booking", element: <Booking /> },
            { path: "payment", element: <Payment /> },
            { path: "booking-confirmation", element: <BookingConfirmation /> },
            {
                path: "/app/search-jeeps",
                element: <SearchJeeps />,
            },
            {
                path: "contact",           // <-- new booking route
                element: <Contact/>,
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
    { path: "booking-confirmation",
        element: <BookingConfirmation />
    },
    { path: "admin-panel",
        element: <AdminDashboard />
    },

    { path: "operator-panel",
        element: <OperatorDashboard />
    },



]);
