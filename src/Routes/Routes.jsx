import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";
import Home from "../LayOuts/Home/Home";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../pages/Dashboard/Dashboard";
import Classes from "../pages/Classes/Classes";
import AddClass from "../pages/AddClass/AddClass";
import PrivateRoute from "./PrivateRoute";
import DashboardMenu from "../components/DashboardMenu";
import ManageClasses from "../components/ManageClasses";
import ManageUsers from "../components/ManageUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                // element:
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />,
        loader: () => fetch('http://localhost:5000/classes')
    },
    {
        path: '/instructors',
        element: <Instructors />,
        loader: () => fetch('http://localhost:5000/classes')
    },
    {
        path: '/classes',
        element: <Classes />
    },
    {
        path: '/addClass',
        element: <AddClass />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/dashboardMenu',
                element: <DashboardMenu />
            },
            {
                path: '/dashboard/manageClasses',
                element: <ManageClasses />
            },
            {
                path: '/dashboard/manageUsers',
                element: <ManageUsers />
            }
        ]
        // loader: () => fetch('http://localhost:5000/classes')
    },
]);

export default router;