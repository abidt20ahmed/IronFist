import { Avatar, DarkThemeToggle } from 'flowbite-react';
import { AuthContext } from '../context/AuthProvider';

import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import karate from '../../public/fist.png';


const NavBar = () => {
    const [hidden, setHidden] = useState(true)

    const { user, logOut, auth } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }

    return (

        <nav className="bg-[#D01F26] text-white dark:bg-slate-800 fixed w-full z-20 top-0 left-0  dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
                <div className='flex gap-1'>
                    <img className='hidden md:block h-12 dark:bg-white rounded-full' title='Iron Fist' src={karate} /><span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Iron Fist</span>
                </div>



                <div className="flex md:order-2">
                    <div className='flex gap-4'>
                        <div className='flex gap-3'>


                            {
                                auth?.currentUser &&
                                <img className="h-12 w-12 rounded-full object-cover" alt="User settings" src={user?.photoURL} title={user?.displayName} />

                            }

                        </div>

                        {
                            auth.currentUser ?
                                <button onClick={handleLogOut} type="button" className="text-white bg-slate-700 hover:bg-slate-600  font-medium rounded-lg text-sm px-4 py-2 text-center lg:mr-3 md:mr-0 dark:bg-[#D01F26] dark:hover:bg-[#AC2424]">Logout</button>
                                :
                                <button type="button" className="text-white bg-slate-700 hover:bg-slate-600  font-medium rounded-lg text-sm px-4 py-2 text-center lg:mr-3 md:mr-0 dark:bg-[#D01F26] dark:hover:bg-[#AC2424]"><Link to='/login'>Login</Link></button>
                        }
                        <DarkThemeToggle className=' text-slate-700 hidden md:block' />
                    </div>
                    <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule='evenodd' d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>

                </div>
                <div className={`items-center justify-between ${hidden ? 'hidden' : ''} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 text-right md:p-0 mt-4 font-medium rounded-lg bg-a-500 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-slate-700 md:dark:bg-slate-800 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? ' text-black drop-shadow-lg dark:text-red-600' : 'hover:text-slate-200')} aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/instructors" className={({ isActive }) => (isActive ? ' text-black drop-shadow-lg dark:text-red-600' : 'hover:text-slate-200')} aria-current="page">Instructors</NavLink>
                        </li>
                        <li>
                            <NavLink to="/classes" className={({ isActive }) => (isActive ? ' text-black drop-shadow-lg dark:text-red-600' : 'hover:text-slate-200')} aria-current="page">Classes</NavLink>
                        </li>
                        {user && <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? ' text-slate-900 drop-shadow-lg dark:text-red-600' : 'hover:text-slate-200')} aria-current="page">Dashboard</NavLink>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
