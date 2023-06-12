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

const ClassTables = () => {
    const { user } = useAuth();
    const [classes, setClasses] = useState([])
    const [reload, setReload] = useState(true)
    const [role, setRole] = useState('')
    const [feedbackId, setFeedbackId] = useState('')
    const [feedback, setFeedback] = useState('')

    // console.log(reload);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/myClasses/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //         });
    // }, [user?.email])

    console.log(role === 'Admin');
    useEffect(() => {
        console.log(user.email);
        fetch(`http://localhost:5000/role/email/${user.email}`)
            .then(res => res.json())
            .then(data => setRole(data.role))
    }, [user.email])
    // console.log(role);


    useEffect(() => {

        fetch(`http://localhost:5000/myClasses/${user.email}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [user.email])


    useEffect(() => {
        fetch(`http://localhost:5000/classes`)
            .then(res => res.json())
            .then(data => {
                if (role === 'Admin') {
                setClasses(data)
                }
            });
    }, [user?.email, role])



    const handleRoles = (id) => {
        fetch(`http://localhost:5000/roles/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modidiedCount) {
                    toast('User Role Updated')
                }
            })
    }


    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = (id) => {
        console.log(id);
        { role === 'Admin' && setFeedbackId(id) }
        setFeedback(id)

        setIsOpen(true)
    }



    return (
        <div className='flex flex-col mx-auto mb-20 p-4 sm:ml-64' >
            <div className=' flex-grow relative overflow-x-auto'>


                {/* Class Image, Class name, Instructor name, Instructor email,
                 Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback */}

                <Table className=' overflow-x-scrol' hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell className='!pl-20'>
                            PICTURE
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Class Name
                        </Table.HeadCell>
                        <Table.HeadCell className='pl-8'>
                            Instructor
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl-16">
                            Instructor Email
                        </Table.HeadCell>
                        <Table.HeadCell className=' text-center'>
                            Available Seats
                        </Table.HeadCell>
                        {role === 'Admin' && 
                        <Table.HeadCell>
                            Price
                            </Table.HeadCell>}
                        {role === 'Instructor' &&
                            <Table.HeadCell>
                                Enrolled
                            </Table.HeadCell>}
                        {role === 'Admin' || role === 'Instructor' &&
                        <Table.HeadCell className="pl-16">
                            Status
                            </Table.HeadCell>}
                        {role === 'Student' &&
                            <Table.HeadCell className="pl-16">
                                Total Enrolled
                            </Table.HeadCell>}
                        {role === 'Student' &&
                            <Table.HeadCell className="pl-7">
                                Purchase
                            </Table.HeadCell>}
                        {role === 'Student' &&
                            <Table.HeadCell className="pl-7">
                                Delete
                            </Table.HeadCell>}
                        {role === 'Admin' && 
                            <Table.HeadCell className="!pl-">
                            Approve
                            </Table.HeadCell>}
                        {role === 'Instructor' &&
                            <Table.HeadCell className="!pl-">
                                Feedback
                            </Table.HeadCell>}
                        {role === 'Admin' &&
                            <Table.HeadCell className="!pl-">
                            Deny
                            </Table.HeadCell>}
                        {role === 'Instructor' &&
                            <Table.HeadCell className="!pl-">
                                Update
                            </Table.HeadCell>}
                        {role === 'Admin' && 
                        <Table.HeadCell className="!pl-">
                            Feedback
                            </Table.HeadCell>}
                    </Table.Head>
                    <Table.Body className={`divide-y ${role !== 'Admin' && 'hidden'}`} >

                        {
                            classes.map((classData, index) => <ClassList key={classData._id} openModal={openModal} reload={reload} setReload={setReload} classData={classData} index={index} ></ClassList>)
                        }

                    </Table.Body>
                    <Table.Body className={`divide-y ${role !== 'Instructor' && 'hidden'}`} >

                        {
                            classes.map((classData, index) => <InstructorClassList key={classData._id} openModal={openModal} reload={reload} setReload={setReload} classData={classData} index={index} ></InstructorClassList>)
                        }

                    </Table.Body>
                    <Table.Body className={`divide-y ${role !== 'Student' && 'hidden'}`} >

                        {
                            classes.map((classData, index) => <MySelectedClass key={classData._id} openModal={openModal} reload={reload} setReload={setReload} classData={classData} index={index} />)
                        }

                    </Table.Body>
                </Table>

                {
                    classes.length < 1 &&
                    <>
                        <h1 className='text-xl md:text-6xl text-gray-600 font-semibold my-40 text-center md:mt-60'>There is no Classes added</h1>
                        <div className='flex justify-center'><Link to={'/addClass'}><Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900'>Add now<FaArrowRight className=' w-5 h-5 ml-2 pt-1' /></Button></Link></div>
                    </>
                }

            </div>
            {role === 'Admin' && <FeedbackModal feedbackId={feedbackId} isOpen={isOpen} closeModal={closeModal} />}
            {role === 'Instructor' &&
                <Feedback feedback={feedback} feedbackId={feedbackId} isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
            }

        </div>
    );
};

export default ClassTables;