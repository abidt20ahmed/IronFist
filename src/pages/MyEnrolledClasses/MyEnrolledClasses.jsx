import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyEnrolledClass from '../../components/MyEnrolledClass';
import { Zoom } from 'react-reveal';
import useMyEnrolled from '../../hooks/useMyEnrolled';
const MyEnrolledClasses = () => {
    const [enrolled, loading, refetch] = useMyEnrolled()

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);










    return (
        <Zoom><div className='flex flex-col mx-auto mb-20 p-4 sm:ml-64' >
            <div className=' flex-grow relative overflow-x-auto'>


                {/* Class Image, Class name, Instructor name, Instructor email,
                 Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback */}

                <Table className=' overflow-x-scrol' hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell className='!pl- text-center'>
                            PICTURE
                        </Table.HeadCell>
                        <Table.HeadCell className=' text-center'>
                            Class Name
                        </Table.HeadCell>
                        <Table.HeadCell className='pl- text-center'>
                            Instructor
                        </Table.HeadCell>
                        <Table.HeadCell className="!pl- text-center">
                            Instructor Email
                        </Table.HeadCell>
                        <Table.HeadCell className=' text-center'>
                            Available Seats
                        </Table.HeadCell>
                        <Table.HeadCell className=' text-center'>
                            Price
                        </Table.HeadCell>

                        <Table.HeadCell className=' text-center'>
                            Enrolled
                        </Table.HeadCell>
                        <Table.HeadCell className="pl- text-center">
                            Status
                        </Table.HeadCell>
                        <Table.HeadCell className="pl- text-center">
                            Total Enrolled
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className='divide-y' >

                        {
                            enrolled.map((classData, index) => <MyEnrolledClass key={classData._id} classData={classData} index={index} />)
                        }

                    </Table.Body>
                </Table>

                {
                    (enrolled.length < 1 && !loading && showContent) &&
                    <>
                        <h1 className='text-xl md:text-6xl text-gray-600 font-semibold my-40 text-center md:mt-60'>You have no classes enrolled yet!</h1>
                        <div className='flex justify-center'><Link to={'/classes'}><button className=' text-white font-bold bg-red-600 p-2 rounded-md'>Add now</button></Link></div>
                    </>
                }

            </div>

        </div></Zoom>
    );
};

export default MyEnrolledClasses;























// import { Button, Table } from 'flowbite-react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import MySelectedClass from '../MySelectedClass/MySelectedClass';
// import { FaArrowRight } from 'react-icons/fa';
// import useClasses from '../../hooks/useClasses';
// import MyEnrolledClass from '../../components/MyEnrolledClass';

// const MyEnrolledClasses = () => {
//     const [classes, loading, refetch] = useClasses()
//     console.log(classes);
//     return (
//         <div className='flex flex-col mx-auto mb-20 p-4 sm:ml-64' >
//             <div className=' flex-grow relative overflow-x-auto'>


//                 {/* Class Image, Class name, Instructor name, Instructor email,
//                  Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback */}

//                 <Table className=' overflow-x-scrol' hoverable={true}>
//                     <Table.Head>
//                         <Table.HeadCell className='!pl-20'>
//                             PICTURE
//                         </Table.HeadCell>
//                         <Table.HeadCell className=' text-center'>
//                             Class Name
//                         </Table.HeadCell>
//                         <Table.HeadCell className='pl-8'>
//                             Instructor
//                         </Table.HeadCell>
//                         <Table.HeadCell className="!pl-16">
//                             Instructor Email
//                         </Table.HeadCell>
//                         <Table.HeadCell className=' text-center'>
//                             Available Seats
//                         </Table.HeadCell>

//                         <Table.HeadCell className=' text-center'>
//                             Price
//                         </Table.HeadCell>

//                         <Table.HeadCell className=' text-center'>
//                             Enrolled
//                         </Table.HeadCell>
//                         <Table.HeadCell className="pl-16">
//                             Status
//                         </Table.HeadCell>
//                         <Table.HeadCell className="pl-16">
//                             Total Enrolled
//                         </Table.HeadCell>
//                     </Table.Head>
//                     <Table.Body className='divide-y' >

//                         {
//                             classes.map((classData, index) => <MyEnrolledClass key={classData._id} classData={classData} index={index} />)
//                         }

//                     </Table.Body>
//                 </Table>

//                 {
//                     (classes.length < 1 && !loading) &&
//                     <>
//                         <h1 className='text-xl md:text-6xl text-gray-600 font-semibold my-40 text-center md:mt-60'>There is no Classes added</h1>
//                         <div className='flex justify-center'><Link to={'/addClass'}><button className=' text-white font-bold bg-red-600 p-2 rounded-md'>Add now<FaArrowRight className=' w-5 h-5 ml-2 pt-1' /></button></Link></div>
//                     </>
//                 }

//             </div>

//         </div>
//     );
// };

// export default MyEnrolledClasses;