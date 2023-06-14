/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Fade } from 'react-reveal';


const Instractor = ({ instructor }) => {
    // console.log(instructor);
    const [show, setShow] = useState(false)
    const { instructorImage, instructorPhoto, instructorName, className, description, facebook, instagram, twitter, linkedIn } = instructor;
    console.log(instructor);

    const isValidUrl = (page) => {
        try {
            const parsedUrl = new URL(page);
            return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
        } catch (error) {
            return false;
        }
    };

    return (
        <Fade buttom>

        <div className="max-w-md bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group overflow-hidden">
                <div className='h-72' href="#">
                    <img className="rounded-t-md overflow-hidden w-full h-full object-cover object-center group-hover:scale-110 transition" src={instructorPhoto ? instructorPhoto : instructorImage} alt="" />
                </div>
                <div className="p-5 py- ">
                <div className=' text-center py-2 px-5'>
                    <p className=' text-2xl text-slate-800 font-semibold'>{instructorName}</p>
                    <p className=' text-md text-slate-800 font-semibold'>{className}</p>
                </div>



                    <p className="font-normal text-gray-700 dark:text-gray-400">{!show ? description.slice(0, 150) : description}<small className={`my-element ${description.length < 250 && 'hidden'}`}> . . . <button onClick={() => setShow(!show)}>{!show ? 'See more' : 'See less'}</button></small></p>


                <div className='flex justify-center m-4 gap-4'>
                    {twitter && isValidUrl(twitter) && <a href={twitter}><FaTwitter className=' text-2xl text-red-900 hover:text-red-600' /></a>} {facebook && isValidUrl(facebook) && <a href={facebook}><FaFacebook className=' text-2xl text-red-900 hover:text-red-600' /></a>}  {instagram && isValidUrl(instagram) && <a href={instagram}><FaInstagram className=' text-2xl text-red-900 hover:text-red-600' /></a>} {linkedIn && isValidUrl(linkedIn) && <a href={linkedIn} ><FaLinkedin className=' text-2xl text-red-900 hover:text-red-600' /></a>}
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default Instractor;