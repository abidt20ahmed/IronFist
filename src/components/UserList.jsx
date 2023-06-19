import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import RoleModal from './RoleModal';

const UserList = ({ userData, setReload, reload, handleRole }) => {
    const { picture, name, email, role } = userData || []

    // console.log(role);



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/role/email/${email}`)
            const data = await res.json()

            return data
        }
        fetchData()
    }, [email])



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
                    <button onClick={() => handleRole(email, 'admin', name)} type='submit' disabled={role === 'Admin'} className=' text-white font-bold bg-red-600 p-2 rounded-md disabled:bg-gray-100 disabled:text-gray-300'>Make Admin</button>
                </Table.Cell>
                <Table.Cell className=' text-center'>
                    <button onClick={() => handleRole(email, 'instructor', name)} type='submit' disabled={role === 'Instructor'} className=' text-white font-bold bg-red-600 p-2 rounded-md disabled:bg-gray-200'>Make Instructor</button>
                </Table.Cell>
            </Table.Row>

        </>
    );
};

export default UserList;