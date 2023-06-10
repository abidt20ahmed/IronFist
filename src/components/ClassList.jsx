import { Button, Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ClassList = ({ classData }) => {
    const { className, instructorName, classImage, instructorImage, email, title, price, enrolled, availableSeats, description, seats, status } = classData;

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img className=' w-40 rounded-lg' src={classImage} alt="" />
            </Table.Cell>
            <Table.Cell>
                {className}
            </Table.Cell>
            <Table.Cell>
                {instructorName}
            </Table.Cell>
            <Table.Cell>
                {email}
            </Table.Cell>
            <Table.Cell>
                {seats}
            </Table.Cell>
            <Table.Cell>
                ${price}
            </Table.Cell>
            <Table.Cell className="!p-16">
                {status}
            </Table.Cell>
            <Table.Cell>
                <button className=' text-white font-bold bg-red-600 p-2 rounded-md'>Approve</button>
            </Table.Cell>
        </Table.Row>
    );
};

export default ClassList;