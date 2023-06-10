import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://bistro-boss-server-fawn.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])

    const { data: clases = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })

    return [clases, loading, refetch]
}

export default useClasses;