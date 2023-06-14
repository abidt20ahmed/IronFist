import { Button, Table } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const MySelectedClass = ({ classData, handleDelete }) => {
    const { _id, className, instructorName, classImage, instructorImage, feedback, email, title, price, enrolled, description, seats, status } = classData;
    // console.log(classData);




    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <img className=' w-40 mx-auto rounded-lg' src={classImage} alt="" />
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    <p className=' text-lg font-semibold'>{className}</p>    
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    <p className=' text-lg font-semibold'> {instructorName}</p>
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    {email}
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    {seats}
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    {price}
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    <Link to={`/dashboard/payment/${_id}`}><button className=' text-white font-bold bg-red-600 p-2 px-5 rounded-md disabled:bg-gray-200'>Pay</button></Link>

                </Table.Cell>
                <Table.Cell className=' text-center'>
                    <button onClick={() => handleDelete(_id)} className=' text-white font-bold bg-red-600 p-2 px-3 rounded-md'>Delete</button>
                </Table.Cell>
            </Table.Row>

        </>
    );
};

export default MySelectedClass;