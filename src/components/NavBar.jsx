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
    // bg - gradient - to - r from - cyan - 500 to - blue - 500
    console.log(user);
    console.log(user?.displayName, user?.photoURL);
    return (

        <nav className="bg-[#D01F26] text-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0  dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className='flex gap-1'>
                    <img className='hidden md:block h-9 text-black' title='Iron Fist' src={karate} /><span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Iron Fist</span>
                </div>



                <div className="flex md:order-2">
                    <div className='flex gap-4'>
                        <div className='flex gap-3'>

                            {
                                auth?.currentUser &&
                                <Avatar className='hidden md:block' alt="User settings" img={user?.photoURL} title={user?.displayName} rounded={true} />

                            }

                        </div>

                        {
                            auth.currentUser ?
                                <button onClick={handleLogOut} type="button" className="text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
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
                    <ul className="flex flex-col p-4 text-right md:p-0 mt-4 font-medium rounded-lg bg-a-500 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? ' text-white drop-shadow-lg' : 'hover:text-gray-200')} aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? ' text-white drop-shadow-lg' : 'hover:text-gray-200')} aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? ' text-white drop-shadow-lg' : 'hover:text-gray-200')} aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? ' text-white drop-shadow-lg' : 'hover:text-gray-200')} aria-current="page">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
