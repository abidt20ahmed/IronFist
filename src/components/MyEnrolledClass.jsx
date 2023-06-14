import { Table } from 'flowbite-react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';


const MyEnrolledClass = ({ classData }) => {
    const { _id, className, instructorName, classImage, instructorImage, feedback, email, title, price, enrolled, description, seats, status } = classData;
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img className=' w-40 mx-auto rounded-lg' src={classImage} alt="" />
            </Table.Cell>
            <Table.Cell className=' text-center'>
                {className}
            </Table.Cell>
            <Table.Cell className=' text-center'>
                {instructorName}
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
                <FaCheckCircle className='h-12 w-12 mx-auto text-green-400 text-right ' />
            </Table.Cell>
            <Table.Cell className='text-center'>
                Enrolled
            </Table.Cell>
            <Table.Cell className='text-center'>
                {enrolled}
            </Table.Cell>
        </Table.Row>
    );
};

export default MyEnrolledClass;