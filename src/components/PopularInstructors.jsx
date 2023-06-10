import React from 'react';
import PopularInstructor from './PopularInstructor';


const PopularInstructors = () => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto" data-aos="zoom-in" data-aos-delay="100">
            <PopularInstructor />
        </div>
    );
};

export default PopularInstructors;