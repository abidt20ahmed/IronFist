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
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        // loader: () => fetch('http://localhost:5000/classes')
    },
    {
        path: '/addClass',
        element: <AddClass />
    },
]);

export default router;