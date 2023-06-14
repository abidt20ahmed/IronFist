import { useQuery } from "@tanstack/react-query";

const useClasses = (id) => {

    const { data: clases = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/classes`);
            return res.json();
        }
    })

    return [clases, loading, refetch]
}

export default useClasses;