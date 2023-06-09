import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";
import Home from "../LayOuts/Home/Home";
import Login from "../authentication/Login";
import Register from "../authentication/Register";

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
        element: <Register />
    }
]);

export default router;