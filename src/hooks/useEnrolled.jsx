import { useQuery } from "@tanstack/react-query";

const useEnrolled = () => {

    const { data: enroled = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['enrolled'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/enrolled`);
            return res.json();
        }
    })

    return [enroled, loading, refetch]
}

export default useEnrolled;