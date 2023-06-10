import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Progress, Spinner } from 'flowbite-react';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="text-center absolute top-1/2 right-1/2">
            <Spinner
                aria-label="Large spinner example"
                size="xl"
            />
        </div>
    }
    if (user) {
        return children;
    }
    toast('You have to log in first to view details')
    return <Navigate state={{ from: location }} to='/login'></Navigate>
};
export default PrivateRoute;