import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import RoleModal from './RoleModal';

const UserList = ({ userData, setReload, reload, handleRole }) => {
    const { picture, name, email, role } = userData;

    // console.log(role);


    const handleStatus = (id, status) => {
        setReload(!reload)
        const state = { status: status }
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
                }
            })
    }



    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(`${import.meta.env.VITE_API_URL}/role/${email}`)
    //         const data = await res.json()
    //         setRole(data)
    //         return data
    //     }
    //     fetchData()
    // }, [email])



    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" >
                <Table.Cell className="whitespace-nowrap w-28 font-medium text-gray-900 dark:text-white">
                    <img className=' w rounded-full' src={picture} alt="" />
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    {name}
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    {email}
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    {role}
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    <form onClick={() => handleRole(email, 'admin', name)} >  <button type='submit' disabled={role === 'Admin'} className=' text-white font-bold bg-red-600 p-2 rounded-md disabled:bg-gray-100 disabled:text-gray-300'>Make Admin</button></form>
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    <form onSubmit={() => handleRole(email, 'instructor', name)}><button type='submit' disabled={role === 'Instructor'} className=' text-white font-bold bg-red-600 p-2 rounded-md disabled:bg-gray-200'>Make Instructor</button></form>

                </Table.Cell>
            </Table.Row>

        </>
    );
};

export default UserList;