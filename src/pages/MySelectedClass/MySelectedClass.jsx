import { Button, Table } from 'flowbite-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const MySelectedClass = ({ classData, setReload, reload, openModal }) => {
    const { _id, className, instructorName, classImage, instructorImage, feedback, email, title, price, enrolled, description, seats, status } = classData;
    console.log(classData);
    const MySelectedClasse = (id, status) => {
        setReload(!reload)
        const state = { status: status }
        fetch(`http://localhost:5000/status/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modidiedCount > 0) {
                    toast('User Role Updated')
                }
            })
    }


    return (
        <>
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
                <Table.Cell className=' text-center'>
                    {seats}
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    {enrolled ? enrolled : 0}
                </Table.Cell>
                <Table.Cell>
                    <button onClick={() => openModal(feedback)} className=' text-white font-bold bg-red-600 p-2 rounded-md disabled:bg-gray-200'>Purchase</button>
                </Table.Cell>
                <Table.Cell>
                    <button className=' text-white font-bold bg-red-600 p-2 rounded-md'>Delete</button>
                </Table.Cell>
            </Table.Row>

        </>
    );
};

export default MySelectedClass;