import React, { useEffect, useState } from 'react';
import Class from './Class';
import Typewriter from 'typewriter-effect';

const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/classes`)
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 6)))
    }, [])

    return (
        <div className="container mx-auto" data-aos="fade-up">

            <h2 className=' text-4xl mb-20 text-red-600 font-bold'>

                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Popular Classes . . .')
                            .callFunction(() => {
                            })
                            // .pauseFor(2500)
                            // .deleteAll()
                            // .callFunction(() => {
                            //     console.log('All strings were deleted');
                            // })
                            .start();
                    }}
                />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto" data-aos="zoom-in" data-aos-delay="100">

                {classes.map(classData => <Class key={classData._id} classData={classData} />)}


            </div>
        </div>
    );
};

export default PopularClasses;