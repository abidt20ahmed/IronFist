import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import { Spinner } from 'flowbite-react';
import { toast } from 'react-toastify';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const Class = ({ refetch, classData }) => {
    const { user, loading } = useAuth()
    const [role, setRole] = useState('')
    const navigate = useNavigate()
    const [selected, setSelected] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [enrolledId, setEnrolledId] = useState('')
    const [show, setShow] = useState(false)
    const { _id, email, className, instructorName, classImage, instructorPhoto, instructorImage, title, price, enrolled, seats, description } = classData;
    // console.log(classData.img, name, title, rate, description);

    // console.log(classData);
    useEffect(() => {
        // console.log(user.email);
        if (!user?.email) return
        fetch(`${import.meta.env.VITE_API_URL}/role/email/${user?.email}`)
            .then(res => res.json())
            .then(data => setRole(data.role))
    }, [user?.email])
    // console.log(role);


    useEffect(() => {
        if (role === 'Student') {
            console.log(user.email, _id);
            fetch(`${import.meta.env.VITE_API_URL}/enrolled/email/${user.email}? id=${_id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setEnrolledId(data.classId)
                    console.log(enrolledId, _id);

                }).catch(error => console.log(error))

            if (!_id) return
            fetch(`${import.meta.env.VITE_API_URL}/selectedId/${_id}`)
                .then(res => res.json())
                .then(data => {
                    // console.log('data');
                    setSelected(data.selectedId)
                }).catch(error => console.log(error))
        }
    }, [role, _id, classData, user?.email, enrolledId])




    const handleSelect = (id) => {
        if (!user) {
            navigate('/login')
            return
        }
        const data = {
            selectedId: _id, date: new Date(), className, studentEmail: user?.email, email, instructorName, classImage, instructorPhoto, instructorImage, title, price, enrolled, seats, description
        }

        fetch(`${import.meta.env.VITE_API_URL}/postSelected`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

                toast('Class Selected Successfully')

                fetch(`${import.meta.env.VITE_API_URL}/selectedId/${_id}`)
                    .then(res => res.json())
                    .then(data => {
                        if (role === 'Student') {
                            setSelected(data.selectedId)
                        }
                    }).catch(error => console.log(error))

                // refetch()
            })
            .catch(error => {
                console.log('Error:', error);
            });

    }

    return (
        <Fade bottom>

            <a className={`max-w-md w-full  border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group overflow-hidden ${(seats < 1 || role === 'Admin' || role === 'Instructor') ? 'bg-red-600' : 'bg-white'}`}>

                <div className=" h-72">
                    <img className="w-full h-full object-cover object-center group-hover:scale-110 transition" src={classImage} alt="" />
                </div>

                <div className="p-5">
                <div className='flex justify-between items-center py-3'>
                        <p className={`text-xl font-bold ${(seats < 1 || role === 'Admin' || role === 'Instructor') ? 'text-gray-300' : 'text-red-600'}`}>{className}</p>
                        <button onClick={() => handleSelect(_id)} className=' text-white font-semibold bg-red-600  p-2 px-5 rounded-sm disabled:bg-gray-200' disabled={seats < 1 || role === 'Admin' || role === 'Instructor' || _id === selected || _id === enrolledId}>Select</button>
                </div>
                    <div className='flex justify-between items-center'>
                        <h5 className={`text-2xl font-bold tracking-tight  dark:text-white mb-2 ${(seats < 1 || role === 'Admin' || role === 'Instructor') ? 'text-gray-300' : 'text-slate-800'}`}>
                            {title}
                        </h5>
                        <p className={`${(seats < 1 || role === 'Admin' || role === 'Instructor') ? 'text-gray-300' : 'text-slate-900'} font-semibold text-sm`}>{seats ? seats : 0} Seats Available</p>
                    </div>

                    <p className={`font-normal  dark:text-gray-400 ${(seats < 1 || role === 'Admin' || role === 'Instructor') ? 'text-gray-300' : 'text-gray-700'}`}>{!show ? description.slice(0, 150) : description}<small className={`my-element ${description.length < 250 && 'hidden'}`}> . . . <button onClick={() => setShow(!show)}>{!show ? 'See more' : 'See less'}</button></small></p>

            </div>
            <hr className='mx-5' />
            <div className='flex justify-between items-center text-gray-500 py-3 px-5'>
                <div className='flex justify-between items-center gap-3'>
                        <img className="h-14 w-14 rounded-full object-cover" src={instructorPhoto ? instructorPhoto : instructorImage} alt="" />
                        <p className={`text-xl font-semibold ${(seats < 1 || role === 'Admin' || role === 'Instructor') ? 'text-gray-300' : 'text-slate-900'}`}>{instructorName}</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-2'>
                            <p className=' font-semibold'>${price}</p>
                            {/* <FaUserAlt className=' text-md' />
                        <p className=' font-semibold'>{enrolled}</p> */}
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaUserAlt className=' text-md' />
                            <p className=' font-semibold'>{enrolled}</p>
                        </div>

                    </div>
                </div>
            </a>
        </Fade>
        // <div className="max-w-md bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group overflow-hidden">
        //     <a href="#">
        //         <img className="rounded-t-lg group-hover:scale-110 overflow-hidden transition  object-cover" src="https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb" alt="" />
        //     </a>
        //     <div className="p-5 py-">
        //         <div className='flex justify-between items-center py-3'>
        //             <p className=' bg-red-600 py-2 px-3'>Karate Kicks</p>
        //             <p className=' font-semibold'>$17</p>
        //         </div>
        //         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        //             <p>
        //                 Crescent Kick
        //             </p>
        //         </h5>
        //         <p className="font-normal text-gray-700 dark:text-gray-400">
        //             <p>
        //                 A sweeping kick that follows an arcing trajectory, targeting the opponent's head or neck.
        //             </p>
        //         </p>
        //     </div>
        //     <hr className='mx-5' />
        //     <div className='flex justify-between items-center py-2 px-5'>
        //         <img className="h-16 w-16 rounded-full object-cover" src="https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb" alt="" />
        //         <p className=' font-semibold'>$17</p>
        //     </div>
        // </div>
    );
};

export default Class;