import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import FeedbackModal from './FeedbackModal';
import UserList from './UserList';


const UserTables = () => {
    const { user, loading } = useAuth();
    const [users, setUsers] = useState([])
    const [reload, setReload] = useState(true)
    const [feedbackId, setFeedbackId] = useState('')

    // useEffect(() => {
    //     fetch(`http://localhost:5000/myClasses/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //         });
    // }, [user?.email])

    const makeAdmin = (email, role, name) => {
        console.log('Clicked');
        console.log(email);
        fetch(`http://localhost:5000/${role}/roles/${email}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast(`${name} is now ${role}`)
                }
            })
    }



    //! user data

    useEffect(() => {
        fetch(`http://localhost:5000/roles`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            });
    }, [user?.email, reload])



    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = (id) => {
        console.log(id);
        setFeedbackId(id)
        setIsOpen(true)
    }



    return (
        <div className='flex flex-col mx-auto mb-20 p-4 sm:ml-64' >
            <div className=' flex-grow relative overflow-x-auto'>



                <Table className=' overflow-x-scrol' hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell className='!pl-8'>
                            PICTURE
                        </Table.HeadCell>
                        <Table.HeadCell className=''>
                            Instructor
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl-16">
                            Instructor Email
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl-">
                            Role
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl-">
                            Make Admin
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl-">
                            Make Instructor
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">

                        {
                            users.map((userData, index) => <UserList key={userData._id} makeAdmin={makeAdmin} openModal={openModal} reload={reload} setReload={setReload} userData={userData} index={index} ></UserList>)
                        }

                    </Table.Body>
                </Table>

                {
                    users.length < 1 && !loading &&
                    <>
                        <h1 className='text-xl md:text-6xl text-gray-600 font-semibold my-40 text-center md:mt-60'>There is no Users Registered</h1>
                        <div className='flex justify-center'><Link to={'/addClass'}><Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900'>Add now<FaArrowRight className=' w-5 h-5 ml-2 pt-1' /></Button></Link></div>
                    </>
                }

            </div>
            <FeedbackModal feedbackId={feedbackId} isOpen={isOpen} closeModal={closeModal} />
        </div>
    );
};

export default UserTables;