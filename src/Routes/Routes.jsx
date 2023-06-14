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
import MyEnrolledClasses from "../pages/MyEnrolledClasses/MyEnrolledClasses";
import UpdateClass from "../components/UpdateClass";
import Payment from "../pages/Payment/Payment";
import History from "../pages/History/History";
import AdminRoute from "./AdminRoute";
import InstractorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/classes`)
    },
    {
        path: '/instructors',
        element: <Instructors />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/classes`)
    },
    {
        path: '/classes',
        element: <Classes />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardMenu /></PrivateRoute>
            },
            {
                path: '/dashboard/manageClasses',
                element: <ManageClasses />
            },
            {
                path: '/dashboard/manageUsers',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addClass',
                element: <InstractorRoute><AddClass /></InstractorRoute>
            },
            {
                path: '/dashboard/myEnrolledClasses',
                element: <StudentRoute><MyEnrolledClasses /></StudentRoute>
            },
            {
                path: '/dashboard/history',
                element: <StudentRoute><History /></StudentRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <StudentRoute><Payment /></StudentRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/selected/id/${params.id}`)
            },
            {
                path: '/dashboard/modal',
                element: <InstractorRoute><UpdateClass /></InstractorRoute>
            },
        ]
        // loader: () => fetch('http://localhost:5000/classes')
    },
]);

export default router;