import React, { useEffect, useState } from 'react';
import Class from './Class';
import Typewriter from 'typewriter-effect';
import TypingEffect from '../hooks/TypingEffect';

const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/classes`)
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 6)))
    }, [])

    return (
        <div className="container mx-auto" data-aos="fade-up">

            <div className='flex justify-center'>
                {classes && <h2 className=' text-4xl mt-20 lg:mt-0 mb-20 text-red-600 font-bold'>

                    <TypingEffect words={['Popular Classes      ', 'Find Yours    ']} />
                </h2>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto justify-items-center" data-aos="zoom-in" data-aos-delay="100">

                {classes.map(classData => <Class key={classData._id} classData={classData} />)}


            </div>
        </div>
    );
};

export default PopularClasses;