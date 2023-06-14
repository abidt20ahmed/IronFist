import { Button, Table } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import RoleModal from './RoleModal';

const ClassList = ({ classData, setReload, reload, openModal }) => {
    const { _id, className, instructorName, classImage, instructorImage, email, title, price, enrolled, availableSeats, description, seats, status } = classData;

    const handleStatus = (id, status) => {
        const state = { status: status }
        setReload(true)
        fetch(`${import.meta.env.VITE_API_URL}/status/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modidiedCount > 0) {
                    toast('User Role Updated')
                    setReload(false)
                }
            })
    }



    return (
        <>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img className=' w-40 rounded-lg' src={classImage} alt="" />
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
                ${price}
            </Table.Cell>
                <Table.Cell className="!p- text-center">
                    {status === 'Pending' && <p className=' text-yellow-400'>{status}</p> || status === 'Approved' && <p className=' text-green-400'>{status}</p> || status === 'Denied' && <p className=' text-red-500'>{status}</p>}
                    <div></div>
            </Table.Cell>
                <Table.Cell className=' text-center'>
                    <button onClick={() => handleStatus(_id, "Approved")} className=' text-white font-bold bg-red-600 p-2 rounded-md disabled:bg-gray-200' disabled={status === 'Approved' || status === 'Denied'}>Approve</button>
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    <button onClick={() => handleStatus(_id, "Denied")} className=' text-white font-bold bg-red-600 disabled p-2 px-3 rounded-md disabled:bg-gray-200' disabled={status === 'Approved' || status === 'Denied'}>Deny</button>
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    <button onClick={() => openModal(_id)} className=' text-white font-bold bg-red-600 p-2 rounded-md'>Feedback</button>
            </Table.Cell>
        </Table.Row>

        </>
    );
};

export default ClassList;