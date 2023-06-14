import { useQuery } from "@tanstack/react-query";


const useSelected = () => {
    const { data: select = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['selected'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/selected`);
            return res.json();
        }
    })

    return [select, loading, refetch]
}


export default useSelected;




