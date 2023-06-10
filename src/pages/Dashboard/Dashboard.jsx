import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Button, DarkThemeToggle, Table } from 'flowbite-react';
import { Link, useLoaderData } from 'react-router-dom';
import Class from '../../components/Class';
import ClassList from '../../components/ClassList';
import { FaArrowRight } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import Fist from '../../assets/fist.png'
import ClassTables from '../../components/ClassTables';


const Dashboard = () => {
    // const classes = useLoaderData();
    const [classes, setClasses] = useState([])
    const { user } = useAuth();
    const [close, setClose] = useState(false)


    // const userEmail = user?.email;

    // console.log(user.email);

    const handleClose = () => {
        setClose(!close)
        console.log(close);
    }



    // console.log(classes);
    let [isOpen, setIsOpen] = useState(true)

    const closeModal = () => {
        setIsOpen(false)
        console.log('closed modal');
    }

    const openModal = () => {
        setIsOpen(true)
    }


    useEffect(() => {
        fetch(`http://localhost:5000/myClasses/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            });
    }, [user?.email])

    const handleRoles = (id) => {
        fetch(`http://localhost:5000/roles/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modidiedCount) {
                    toast('User Role Updated')
                }
            })
    }



    return (
        <div>
            {/* <NavBar /> */}

            <div className=' w-16 ml-auto'>
                <button onClick={handleClose} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-1 text-sm text-white rounded-lg sm:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            </div>


            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen  ${close && 'transition-transform -translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-red-600 dark:bg-slate-950">
                    <a href="#" className="flex items-center pl-2.5 mb-5">
                        <img src={Fist} className="h-10 mr-1 dark:bg-white rounded-full" alt="Iron Fist Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Iron Fist</span>
                        <DarkThemeToggle className="inline-flex items-center justify-center px-2 ml-10 text-sm font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-300" />
                    </a>
                    <ul className="space-y-2 font-medium mt-10">
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Manage Classes</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>

            {/* <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+fdgdsfgfsg</p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-white">+</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-white">+</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-white">+</p>
                        </div>
                    </div>
                </div>
            </div> */}


            <ClassTables classes={classes} />
            {/* <div className='sm:ml-64'>
                <Footer />
            </div> */}

        </div>

    );
};

export default Dashboard;
// import React, { useEffect, useState } from 'react';
// import NavBar from '../../components/NavBar';
// import Footer from '../../components/Footer';
// import { Button, Table } from 'flowbite-react';
// import { Link, useLoaderData } from 'react-router-dom';
// import Class from '../../components/Class';
// import ClassList from '../../components/ClassList';
// import { FaArrowRight } from 'react-icons/fa';
// import useAuth from '../../hooks/useAuth';
// import { toast } from 'react-toastify';


// const Dashboard = () => {
//     // const classes = useLoaderData();
//     const [classes, setClasses] = useState([])
//     const [show, setShow] = useState(true)
//     const { user } = useAuth();

//     const [asc, setAsc] = useState(true)
//     const [state, setState] = useState('Descending')
//     // const userEmail = user?.email;

//     console.log(user);


//     const handleSort = () => {
//         setAsc(!asc)
//         if (asc) {
//             toast('Descending Sorted')
//         } else {
//             toast('Ascending Sorted')
//         }
//         if (state === 'Ascending') {
//             setState('Descending')
//         } else {
//             setState('Ascending')
//         }

//     }


//     console.log(classes);
//     let [isOpen, setIsOpen] = useState(true)

//     const closeModal = () => {
//         setIsOpen(false)
//         console.log('closed modal');
//     }

//     const openModal = () => {
//         setIsOpen(true)
//     }


//     useEffect(() => {
//         fetch(`http://localhost:5000/classes/${user?.email}?sort=${asc ? 'asc' : ''}`)
//             .then(res => res.json())
//             .then(data => {
//                 setClasses(data);
//             });
//         // fetch(`https://toy-market-server-phi.vercel.app/mytoys/${user?.email}`)
//         //     .then(res => res.json())
//         //     .then(data => {
//         //         setClasses(data)
//         //     })
//     }, [user?.email, asc])


//     return (
//         <div>
//             <NavBar />

//             <div className='min-h-screen flex flex-col max-w-7xl mx-auto mb-20' >
//                 <div className=' flex-grow relative overflow-x-auto mt-20'>

//                     {
//                         classes.length > 0 &&
//                         <div className='flex justify-center mb-10'>
//                             <Button onClick={handleSort} gradientDuoTone="purpleToBlue" className=' bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 mt-10'>{state}</Button>
//                         </div>
//                     }

//                     <Table className=' overflow-x-scrol' hoverable={true}>
//                         <Table.Head>
//                             <Table.HeadCell className='!pl-20'>
//                                 PICTURE
//                             </Table.HeadCell>
//                             <Table.HeadCell>
//                                 Seller
//                             </Table.HeadCell>
//                             <Table.HeadCell>
//                                 Toy Name
//                             </Table.HeadCell>
//                             <Table.HeadCell>
//                                 Category
//                             </Table.HeadCell>
//                             <Table.HeadCell>
//                                 Price
//                             </Table.HeadCell>
//                             <Table.HeadCell>
//                                 Available Quantity
//                             </Table.HeadCell>
//                             <Table.HeadCell className="!pl-12">
//                                 Details
//                             </Table.HeadCell>
//                         </Table.Head>
//                         <Table.Body className="divide-y">


//                             {
//                                 classes.map((classData, index) => <ClassList key={classData._id} classData={classData} index={index} ></ClassList>)
//                             }


//                         </Table.Body>
//                     </Table>






//                     {
//                         classes.length < 1 &&
//                         <>
//                             <h1 className='text-xl md:text-6xl text-gray-600 font-semibold my-40 text-center md:mt-60'>There is no Classes added</h1>
//                             <div className='flex justify-center'><Link to={'/addClass'}><Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900'>Add now<FaArrowRight className=' w-5 h-5 ml-2 pt-1' /></Button></Link></div>
//                         </>
//                     }


//                     {
//                         show && classes.length == 5 &&
//                         <div className='flex justify-center mt-20 mb-10'>
//                             <Button onClick={() => setShow(false)} gradientDuoTone="purpleToBlue" className=' bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 mt-10'>Show More</Button>
//                         </div>
//                     }

//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default Dashboard;