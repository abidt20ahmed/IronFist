import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Login from '../../authentication/Login';
import Register from '../../authentication/Register';
import { Link, Outlet } from 'react-router-dom';
import { Avatar, Button, Card, Carousel } from 'flowbite-react';

const Home = () => {
    const sectionStyle = {
        backgroundImage: "url('https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb')",
        backgroundPosition: "center",
        backgroundAttachment: 'fixed',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#606060",
        marginTop: "60px",
        // borderRadius: "20px",

    };

    return (
        <div className=''>
            <NavBar />
            <section style={sectionStyle}>
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"><span
                        className="inline-block h-full  bg-clip-text"
                        style={{
                            // WebkitTextFillColor: 'transparent',
                            display: 'inline-flex',
                            alignItems: 'center',
                            lineHeight: '2'
                        }}
                    >
                        The best thing is not to fight at all.
                    </span></h1>
                    <p className="mb-8 text-lg font-semibold text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome to the Ultimate Toy Car Wonderland: Where Imagination Takes the Wheel and Adventure Knows No Bounds</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Button gradientDuoTone="purpleToBlue" className="inline-flex justify-center items-center py-1 px-4 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900">
                            Get started
                        </Button>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-1 px-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>


            <div className="h-56 sm:h-64 md:h-[500px] 2xl:h-[700px] mt-10 lg:mt-40 mb-5 lg:pb-24 max-w-7xl mx-auto overflow-hidden">
                <Carousel slideInterval={3000}>
                    <div className='relative'>
                        <img className='w-full object-cover rounded-lg brightness-50' src='https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb' alt="" />
                        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full absolute top-0'></div>
                        <div className=" hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto md:text-left md:left-1/4 md:pl-96 ml-20 w-full">
                            <h1 className="mb-8 mr-0 leading-8 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl lg:w-full">
                                <span
                                    className="inline-block h-full  text-white"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    Take Yourself to the Next Level
                                </span>
                            </h1>
                            <p className="mb-8 text-lg font-semibold text-gray-300 lg:text-xl sm:px- lg:px-">Level up your abilities with our transformative web platform. Experience a new dimension of growth and achievement</p>

                        </div>
                    </div>
                </Carousel>
            </div >


            <section id="popular-courses" className="mb-20">
                <div className="container mx-auto" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Courses</h2>
                        <p>Popular Courses</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto" data-aos="zoom-in" data-aos-delay="100">

                        {/* <Card
    className=' max-w-sm'
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb"
    >
    <div className='flex justify-between items-center'>
    <p className=' bg-red-600 py-2 px-3'>Karate Kicks</p>
    <p className=' font-semibold'>$15</p>
    </div>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
    Hook Kick
    </p>
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
    A curved kick delivered by turning the body and striking the opponent with the heel or instep.
    </p>
    </p>
    </Card>
    <Card
    className=' max-w-sm'
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb"
    >
    <div className='flex justify-between items-center'>
    <p className=' bg-red-600 py-2 px-3'>Karate Striks</p>
    <p className=' font-semibold'>$10</p>
    </div>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
    Hammer Fist
    </p>
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
    A strike made by tightly clenching the hand and delivering a downward strike, usually targeting the opponent's head, collarbone, or back.
    </p>
    </p>
</Card>*/}
                        <Card
                            className=' max-w-sm'
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb"
                        >
                            <div className='flex justify-between items-center'>
                                <p className=' bg-red-600 py-2 px-3'>Karate Kicks</p>
                                <p className=' font-semibold'>$17</p>
                            </div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Crescent Kick
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    A sweeping kick that follows an arcing trajectory, targeting the opponent's head or neck.
                                </p>
                            </p>
                        </Card>



                        <div className="max-w-md bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group overflow-hidden">
                            <a href="#">
                                <img className="rounded-t-lg group-hover:scale-110 overflow-hidden transition  object-cover" src="https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb" alt="" />
                            </a>
                            <div className="p-5 py-">
                                <div className='flex justify-between items-center py-3'>
                                    <p className=' bg-red-600 py-2 px-3'>Karate Kicks</p>
                                    <p className=' font-semibold'>$17</p>
                                </div>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                                    <p>
                                        Crescent Kick
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <p>
                                        A sweeping kick that follows an arcing trajectory, targeting the opponent's head or neck.
                                    </p>
                                </p>
                            </div>
                            <hr className='mx-5' />
                            <div className='flex justify-between items-center p-5'>
                                <img className="h-16 w-16 rounded-full object-cover" src="https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb" alt="" />
                                <p className=' font-semibold'>$17</p>
                            </div>
                        </div>



                    </div>

                </div>
            </section>


            <Outlet></Outlet>

            <Footer />
        </div>
    );
};

export default Home;