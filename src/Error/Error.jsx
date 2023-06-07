import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div
            className='flex items-center justify-center min-h-screen w-screen'
            style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2021/02/26/16/29/error-404-6052476_1280.png')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Link className='absolute bottom-5' to={'/'}>
                <Button className='drop-shadow-xl hover:bg-[#7B96D4] text-white bg-[#4C6FBF]'>
                    Back To Home
                </Button>
            </Link>
        </div>
    );
};

export default Error;