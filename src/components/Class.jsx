import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const Class = ({ classData }) => {
    // console.log(classData);
    const { className, instructorName, classImage, instructorImage, title, price, enrolled, availableSeats, description } = classData;
    // console.log(classData.img, name, title, rate, description);
    return (
        <div className="max-w-md bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group overflow-hidden">
            <a href="#">
                <img className="rounded-t-md group-hover:scale-110 overflow-hidden transition  object-cover" src={classImage} alt="" />
            </a>
            <div className="p-5 py-">
                <div className='flex justify-between items-center py-3'>
                    <p className=' bg-red-600 text-white py-2 px-3'>{className}</p>
                    <p className=' font-semibold'>${price}</p>
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white mb-2">

                    {title}

                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <hr className='mx-5' />
            <div className='flex justify-between items-center text-gray-500 py-3 px-5'>
                <div className='flex justify-between items-center gap-3'>
                    <img className="h-14 w-14 rounded-full object-cover" src={instructorImage} alt="" />
                    <p className=' text-xl font-semibold'>{instructorName}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaUserAlt className=' text-lg' />
                    <p className=' font-semibold'>{enrolled}</p>
                </div>
            </div>
        </div>
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