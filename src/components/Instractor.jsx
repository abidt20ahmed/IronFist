/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Instractor = ({ instructor }) => {
    // console.log(instructor);
    const { instructorImage, instructorName, className, description, facebook, instagram, twitter, linkedIn } = instructor

    const isValidUrl = (page) => {
        try {
            const parsedUrl = new URL(page);
            return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
        } catch (error) {
            return false;
        }
    };

    return (
        <div className="max-w-md bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group overflow-hidden">
            <a href="#">
                <img className="rounded-t-md group-hover:scale-110 overflow-hidden transition  object-cover" src={instructorImage} alt="" />
            </a>
            <div className="p-5 py-">
                <div className=' text-center py-2 px-5'>
                    <p className=' text-2xl text-slate-800 font-semibold'>{instructorName}</p>
                    <p className=' text-md text-slate-800 font-semibold'>{className}</p>
                </div>


                <p className="font-normal text-gray-700 text-center dark:text-gray-400">

                    {description}

                </p>
                <div className='flex justify-center m-4 gap-4'>
                    {twitter && isValidUrl(twitter) && <a href={twitter}><FaTwitter className=' text-2xl text-red-900 hover:text-red-600' /></a>} {facebook && isValidUrl(facebook) && <a href={facebook}><FaFacebook className=' text-2xl text-red-900 hover:text-red-600' /></a>}  {instagram && isValidUrl(instagram) && <a href={instagram}><FaInstagram className=' text-2xl text-red-900 hover:text-red-600' /></a>} {linkedIn && isValidUrl(linkedIn) && <a href={linkedIn} ><FaLinkedin className=' text-2xl text-red-900 hover:text-red-600' /></a>}
                </div>
            </div>
        </div>
    );
};

export default Instractor;