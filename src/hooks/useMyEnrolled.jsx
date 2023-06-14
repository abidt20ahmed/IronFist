import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useMyEnrolled = () => {
    const { user } = useAuth();
    const { data: enroled = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['enrolled'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/enrolled/${user?.email}`);
            return res.json();
        }
    })

    return [enroled, loading, refetch]
}

export default useMyEnrolled;