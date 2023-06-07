import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>
    },
]);

export default router;