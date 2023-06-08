import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";
import Home from "../LayOuts/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>
    },
]);

export default router;