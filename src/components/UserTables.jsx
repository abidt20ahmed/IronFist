import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import FeedbackModal from './FeedbackModal';
import UserList from './UserList';
import useRole from '../hooks/useRole';
import { Fade, Zoom } from 'react-reveal';


const UserTables = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([])
    const [reload, setReload] = useState(true)
    const [feedbackId, setFeedbackId] = useState('')
    const [role, loading, refetch] = useRole(user?.email)


    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/myClasses/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //         });
    // }, [user?.email])

    const handleRole = (email, role, name) => {


        fetch(`${import.meta.env.VITE_API_URL}/${role}/roles/${email}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                if (data.modifiedCount) {
                    toast(`${name} is now ${role}`)
                }
            })
    }



    //! user data

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/roles`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            });
    }, [user?.email, role])



    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = (id) => {

        setFeedbackId(id)
        setIsOpen(true)
    }



    return (
        <Zoom> <div className='flex flex-col mx-auto mb-20 p-4 sm:ml-64' >
            <div className=' flex-grow relative overflow-x-auto'>



                <Table className=' overflow-x-scrol' hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell className='!pl-8'>
                            PICTURE
                        </Table.HeadCell>
                        <Table.HeadCell className='pl- text-center'>
                            Instructor
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl- text-center">
                            Instructor Email
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl- text-center">
                            Role
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl- text-center">
                            Make Admin
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl- text-center">
                            Make Instructor
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">

                        {
                            users.map((userData, index) => <UserList key={userData._id} handleRole={handleRole} openModal={openModal} reload={reload} setReload={setReload} userData={userData} index={index} ></UserList>)
                        }

                    </Table.Body>
                </Table>

                {
                    (users.length < 1 && !loading && showContent) &&
                    <>
                        <h1 className='text-xl md:text-6xl text-gray-600 font-semibold my-40 text-center md:mt-60'>There is no Users Registered</h1>
                        <div className='flex justify-center'><Link to={'/addClass'}><Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900'>Add now<FaArrowRight className=' w-5 h-5 ml-2 pt-1' /></Button></Link></div>
                    </>
                }
                {
                    (users.length < 1 && !loading) &&
                    <>
                        <h1 className='text-xl md:text-6xl text-gray-600 font-semibold my-40 text-center md:mt-60'>Wait a moment...</h1>
                    </>
                }

            </div>
            {/* <FeedbackModal feedbackId={feedbackId} isOpen={isOpen} closeModal={closeModal} /> */}
        </div></Zoom>
    );
};

export default UserTables;