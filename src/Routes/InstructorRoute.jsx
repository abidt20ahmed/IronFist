import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useRole from "../hooks/useRole";


const InstractorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useRole();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin === 'Instructor') {

        return children;
    } else { toast("You're not an instructor") }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstractorRoute;