import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useRole from "../hooks/useRole";


const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useRole();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin === 'Student') {

        return children;
    } else { toast("You're not a student") }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;