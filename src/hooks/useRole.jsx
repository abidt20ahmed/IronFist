
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useRole = () => {
    const { user, loading } = useAuth();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/role/email/${user?.email}`);
            return res.json();
        }
    })

    return [isAdmin?.role, isAdminLoading]
}
export default useRole;





















// import { useQuery } from "@tanstack/react-query";


// const useRole = (email) => {
//     const { data: roles = [], isLoading: loading, refetch } = useQuery({
//         queryKey: ['role'],
//         queryFn: async () => {
//             const res = await fetch(`${import.meta.env.VITE_API_URL}/role/email/${email}`);
//             return res.json();
//         }
//     })

//     return [roles.role, loading, refetch]
// }


// export default useRole;