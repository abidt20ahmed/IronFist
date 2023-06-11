import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import RoleModal from './RoleModal';

const UserList = ({ userData, setReload, reload, makeAdmin }) => {
    const { picture, name, email, role } = userData;

    console.log(role);


    const handleStatus = (id, status) => {
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



    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(`http://localhost:5000/role/${email}`)
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
                <Table.Cell>
                    {name}
                </Table.Cell>
                <Table.Cell>
                    {email}
                </Table.Cell>
                <Table.Cell>
                    {role}
                </Table.Cell>
                <Table.Cell>
                    <button onClick={() => makeAdmin(email, 'admin', name)} className=' text-white font-bold bg-red-600 p-2 rounded-md disabled:bg-gray-200'>Make Admin</button>
                </Table.Cell>
                <Table.Cell>
                    <button onClick={() => makeAdmin(email, 'instructor', name)} className=' text-white font-bold bg-red-600 p-2 rounded-md disabled:bg-gray-200'>Make Instructor</button>
                </Table.Cell>
            </Table.Row>

        </>
    );
};

export default UserList;