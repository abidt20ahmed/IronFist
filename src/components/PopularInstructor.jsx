/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const PopularInstructor = () => {
    return (
        <div className="max-w-md bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group overflow-hidden">
            <a href="#">
                <img className="rounded-t-md group-hover:scale-110 overflow-hidden transition  object-cover" src="https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb" alt="" />
            </a>
            <div className="p-5 py-">
                <div className=' text-center py-2 px-5'>
                    <img className="h-16 w-16 mx-auto rounded-full object-cover" src="https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb" alt="" />
                    <p className=' text-2xl text-slate-800 font-semibold'>Instractor Name</p>
                    <p className=' text-md text-slate-800 font-semibold'>Class Name</p>
                </div>


                <p className="font-normal text-gray-700 text-center dark:text-gray-400">

                    A sweeping kick that follows an arcing trajectory, targeting the opponent's head or neck.

                </p>
                <div className='flex justify-center m-4 gap-4'>
                    <FaTwitter className=' text-2xl text-red-900 hover:text-red-600' /> <FaFacebook className=' text-2xl text-red-900 hover:text-red-600' /> <FaInstagram className=' text-2xl text-red-900 hover:text-red-600' /> <FaLinkedin className=' text-2xl text-red-900 hover:text-red-600' />
                </div>
            </div>
        </div>
    );
};

export default PopularInstructor;