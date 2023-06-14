import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ClassList from './ClassList';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import RoleModal from './RoleModal';
import FeedbackModal from './FeedbackModal';
import InstructorClassList from './InstructorClassList';
import Feedback from './Feedback';
import MySelectedClass from '../pages/MySelectedClass/MySelectedClass';
import UpdateClass from './UpdateClass';
import { Fade, Zoom } from 'react-reveal';

const ClassTables = () => {
    const { user, loading } = useAuth();
    const [classes, setClasses] = useState([])
    const [reload, setReload] = useState(true)
    const [role, setRole] = useState('')
    const [feedbackId, setFeedbackId] = useState('')
    const [feedback, setFeedback] = useState('')


    // ? to handle the empty array status
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);



    useEffect(() => {
        // console.log(user.email);
        fetch(`${import.meta.env.VITE_API_URL}/role/email/${user?.email}`)
            .then(res => res.json())
            .then(data => setRole(data.role))
    }, [user?.email])
    // console.log(role);


    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/selected/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (role === 'Student') {
                    setClasses(data)
                }
            })
    }, [user?.email, role])



    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/myClasses/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (role === 'Instructor') {
                    setClasses(data)
                }
            })
    }, [user.email, role])


    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/classes`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (role === 'Admin') {
    //             setClasses(data)
    //             }
    //         });
    // }, [user?.email, role, reload])


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/classes`)
            .then(res => res.json())
            .then(data => {
                if (role === 'Admin') {
                    setClasses(data);
                }
            });
    }, [user?.email, role, reload]);


    const handleDelete = (id) => {

        if (id) {
            const procced = confirm('Confirm delete')

            if (procced) {
                fetch(`${import.meta.env.VITE_API_URL}/selected/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            toast('Successfully deleted')
                        }

                        const left = classes.filter(classData => classData._id !== id);
                        setClasses(left)

                    })
            }
        }
    }




    let [isOpen, setIsOpen] = useState(false)
    let [open, setOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    const closeClassUpdate = () => {
        setOpen(false)
    }

    const openModal = (id) => {

        { role === 'Admin' && setFeedbackId(id) }
        setFeedback(id)

        setIsOpen(true)
    }
    const openClassUpdate = (id, update) => {
        // console.log('update clicked');
        // setKey(update)
        setFeedbackId(id)
        // console.log(id, 'key', key);

        setOpen(true)
    }



    return (
        <Zoom>  <div className='flex flex-col mx-auto mb-20 p-4 sm:ml-64' >
            <div className=' flex-grow relative overflow-x-auto'>


                {/* Class Image, Class name, Instructor name, Instructor email,
                 Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback */}

                <Table className=' overflow-x-scrol' hoverable={true}>
                    {classes?.length > 0 &&
                    <Table.Head>
                            <Table.HeadCell className='!pl- text-center'>
                            PICTURE
                        </Table.HeadCell>
                            <Table.HeadCell className=' text-center'>
                            Class Name
                        </Table.HeadCell>
                            <Table.HeadCell className='pl- text-center'>
                            Instructor
                        </Table.HeadCell>
                            <Table.HeadCell className="!pl- text-center">
                            Instructor Email
                        </Table.HeadCell>
                        <Table.HeadCell className=' text-center'>
                            Available Seats
                        </Table.HeadCell>
                        {role === 'Admin' && 
                                <Table.HeadCell className=' text-center'>
                            Price
                            </Table.HeadCell>}
                        {role === 'Instructor' &&
                                <Table.HeadCell className=' text-center'>
                                Enrolled
                            </Table.HeadCell>}
                            {(role === 'Admin' || role === 'Instructor') &&
                                <Table.HeadCell className="pl- text-center">
                            Status
                            </Table.HeadCell>}
                        {role === 'Student' &&
                            <Table.HeadCell className="pl-16">
                                    Price
                            </Table.HeadCell>}
                        {role === 'Student' &&
                                <Table.HeadCell className="pl- text-center">
                                    Pay
                            </Table.HeadCell>}
                        {role === 'Student' &&
                                <Table.HeadCell className="pl- text-center">
                                Delete
                            </Table.HeadCell>}
                        {role === 'Admin' && 
                                <Table.HeadCell className="!pl- text-center">
                            Approve
                            </Table.HeadCell>}
                        {role === 'Instructor' &&
                                <Table.HeadCell className="!pl- text-center">
                                Feedback
                            </Table.HeadCell>}
                        {role === 'Admin' &&
                                <Table.HeadCell className="!pl- text-center">
                            Deny
                            </Table.HeadCell>}
                        {role === 'Instructor' &&
                                <Table.HeadCell className="!pl- text-center">
                                Update
                            </Table.HeadCell>}
                        {role === 'Admin' && 
                                <Table.HeadCell className="!pl- text-center">
                            Feedback
                            </Table.HeadCell>}
                        </Table.Head>}
                    <Table.Body className={`divide-y ${role !== 'Admin' && 'hidden'}`} >

                        {
                            classes.map((classData, index) => <ClassList key={classData._id} openModal={openModal} reload={reload} setReload={setReload} classData={classData} index={index} ></ClassList>)
                        }

                    </Table.Body>
                    <Table.Body className={`divide-y ${role !== 'Instructor' && 'hidden'}`} >

                        {
                            classes.map((classData, index) => <InstructorClassList key={classData._id} openModal={openModal} openClassUpdate={openClassUpdate} reload={reload} setReload={setReload} classData={classData} index={index} ></InstructorClassList>)
                        }

                    </Table.Body>
                    {role === "Student" && <Table.Body className={`divide-y ${role !== 'Student' && 'hidden'}`} >

                        {
                            classes.map((classData, index) => <MySelectedClass key={classData._id} handleDelete={handleDelete} classData={classData} index={index} />)
                        }

                    </Table.Body>}
                </Table>

                {
                    (classes.length < 1 && !loading && showContent) &&
                    <>
                        <h1 className='text-xl md:text-6xl text-gray-600 font-semibold my-40 text-center md:mt-60'>{role === 'Student' ? 'You have no classes selected yet!' : 'There is no classes added'}</h1>
                        <div className='flex justify-center'><Link to={role === 'Student' && '/classes'}><button className=' text-white font-bold bg-red-600 p-2 px-3 rounded-md'>Add now</button></Link></div>
                    </>
                }

            </div>
            {role === 'Admin' && <FeedbackModal feedbackId={feedbackId} isOpen={isOpen} closeModal={closeModal} />}
            {role === 'Instructor' &&
                <Feedback feedback={feedback} feedbackId={feedbackId} isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
            }
            {role === 'Instructor' &&
                <UpdateClass feedbackId={feedbackId} open={open} openClassUpdate={openClassUpdate} closeClassUpdate={closeClassUpdate} />
            }

        </div></Zoom>
    );
};

export default ClassTables;