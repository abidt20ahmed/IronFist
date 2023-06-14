import { Table } from 'flowbite-react';
import React from 'react';
import { FaCcStripe, FaCheckCircle } from 'react-icons/fa';


const MyPaymentHistory = ({ classData }) => {
    const { _id, className, instructorName, date, classImage, instructorImage, feedback, email, title, price, enrolled, description, seats, status } = classData;
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" >
            <Table.Cell className="whitespace-nowrap text-center font-medium text-gray-900 dark:text-white">
                {new Date(date).toLocaleDateString()}
            </Table.Cell>
            <Table.Cell className=' text-center'>
                {new Date(date).toLocaleTimeString()}
            </Table.Cell>
            <Table.Cell className=' text-center'>
                {instructorName}
            </Table.Cell>
            <Table.Cell className=' text-center'>
                {email}
            </Table.Cell>
            <Table.Cell className=' text-center'>
                {className}
            </Table.Cell>
            <Table.Cell className=' text-center'>
                <FaCcStripe className=' h-12 w-14 mx-auto text-indigo-600' />
            </Table.Cell>
            <Table.Cell className=' text-center'>
                ${price}
            </Table.Cell>
        </Table.Row>
    );
};

export default MyPaymentHistory;