import React from 'react';
import PopularInstructor from './PopularInstructor';
import { Fade } from 'react-reveal';
import { useState } from 'react';
import { useEffect } from 'react';
import TypingEffect from '../hooks/TypingEffect';

const PopularInstructors = () => {


    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/classes`)
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 6)))
    }, [])



    return (
        <Fade bottom>
            <div className=' flex justify-center'>
                {classes && <h2 className=' text-4xl mb-20 text-red-600 font-bold'>
                    <Fade bottom>  <TypingEffect words={['Popular Instructors . . .', 'Best of the best']} /></Fade>

                </h2>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto justify-items-center" data-aos="zoom-in" data-aos-delay="100">
                {
                    classes.map(classData => <PopularInstructor key={classData._id} classData={classData} />)
                }

        </div>
        </Fade>
    );
};

export default PopularInstructors;