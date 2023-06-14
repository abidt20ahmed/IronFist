import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useAdmin = () => {
    const { user, loading } = useAuth();

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/role/email/${user?.email}`);
            return res.json();
        }
    })

    return [isAdmin?.role, isAdminLoading]
}
export default useAdmin;