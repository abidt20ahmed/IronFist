import React, { useEffect, useState } from 'react';
import useEnrolled from '../hooks/useEnrolled';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const DashboardMenu = () => {
    const [role] = useRole()
    const { user } = useAuth()
    const [enrolled, loading, refetch] = useEnrolled()
    const [selected, setSelected] = useState()


    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/selected/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setSelected(data)

            })
    }, [user?.email])

    // console.log(selected);

    return (
        <div className="p-4 sm:ml-64">
            {role === 'Student' && <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center justify-center h-52 rounded bg-blue-200 dark:bg-gray-800">
                        <div>
                            <p className="text-2xl text-gray-700 font-bold dark:text-white">Enrolled Classes</p>
                            <p className="text-2xl text-gray-700 font-bold dark:text-white text-center">{enrolled?.length}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-52 rounded bg-blue-200 dark:bg-gray-800">
                        <div>
                            <p className="text-2xl text-gray-700 font-bold dark:text-white">{selected?.length > 0 ? 'Selected Classes' : 'You have no classes selected'}</p>
                            <p className="text-2xl text-gray-700 font-bold dark:text-white text-center">{selected?.length > 0 && selected?.length}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-52 rounded bg-blue-200 dark:bg-gray-800">
                        <div>
                            <p className="text-2xl text-gray-700 font-bold dark:text-white">Enrolled Classes</p>
                            <p className="text-2xl text-gray-400 dark:text-white text-center">{enrolled?.length}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center  h-52 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-white"></p>
                </div>

            </div>}
        </div>
    );
};

export default DashboardMenu;