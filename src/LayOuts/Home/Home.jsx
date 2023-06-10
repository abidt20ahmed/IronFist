import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Link, Outlet } from 'react-router-dom';
import { Avatar, Button, Card, Carousel } from 'flowbite-react';
import PopularClasses from '../../components/PopularClasses';
import PopularInstructors from '../../components/PopularInstructors';
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';


const Home = () => {
    const sectionStyle = {
        backgroundImage: "url('https://images.pexels.com/photos/7045482/pexels-photo-7045482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
                    <p className="mb-8 text-lg font-semibold text-gray-300 lg:text-xl sm:px-16 lg:px-48">Unlock your potential. Master self-defense techniques and build unshakable confidence. Empower yourself today!</p>
                    {/* <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Button gradientDuoTone="purpleToBlue" className="inline-flex justify-center items-center py-1 px-4 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900">
                            Get started
                        </Button>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-1 px-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </a>
                    </div> */}
                </div>
            </section>


            <section className=" bg-slate-50 mt-20">
                <div className="">

                    <div className="grid grid-cols-4 py-10 justify-center max-w-7xl mx-auto text-center">

                        <div className="">
                            <span className=" text-5xl font-bold text-red-600">
                                <CountUp start={0} end={130} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            </span>
                            <p className=' text-lg text-slate-800 font-semibold'>Students</p>
                        </div>

                        <div className="">
                            <span className=" text-5xl font-bold text-red-600">
                                <CountUp start={0} end={17} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp></span>
                            <p className=' text-lg text-slate-800 font-semibold'>Courses</p>
                        </div>

                        <div className="">
                            <span className=" text-5xl font-bold text-red-600">
                                <CountUp start={0} end={9} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            </span>
                            <p className=' text-lg text-slate-800 font-semibold'>Events</p>
                        </div>

                        <div className="">
                            <span className=" text-5xl font-bold text-red-600">
                                <CountUp start={0} end={15} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            </span>
                            <p className=' text-lg text-slate-800 font-semibold'>Trainers</p>
                        </div>

                    </div>

                </div>
            </section>


            <div className="h-56 sm:h-64 md:h-[500px] 2xl:h-[700px] mt-10 lg:mt-20 lg:pb-24 max-w-7xl mx-auto overflow-hidden">
                <Carousel slideInterval={3000}>
                    <div className='relative'>
                        <img className='w-full object-cover rounded-lg brightness-75' src='https://img.freepik.com/free-photo/karate-player-performing-karate-stance_107420-65076.jpg?w=1380&t=st=1686344116~exp=1686344716~hmac=244a7b416c4d11ab63a3cafbaccd6904bbedc0de850aead8e7a13d22b9ee35fc' alt="" />
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
                    <div className='relative'>
                        <img className='w-full object-cover rounded-lg brightness-75' src='https://img.freepik.com/free-photo/preschooler-boy-dressed-white-karate-kimono-with-orange-belt_613910-1994.jpg?w=1380&t=st=1686344302~exp=1686344902~hmac=ea27cfa2ae495347fd3d5311dfece88c4ce4c09fe04b306b7d55bed997fce954' alt="" />
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
                    <div className='relative'>
                        <img className='w-full object-cover rounded-lg brightness-75' src='https://img.freepik.com/free-photo/two-judokas-fighters-posing_155003-2080.jpg?w=1380&t=st=1686344385~exp=1686344985~hmac=66be405d5e527678c1f4dece230c3343ea09d3b6a42cc982119c8a0c3eb7c9f8' alt="" />
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
            <main className='max-w-7xl mx-auto'>


                <section id="popular-courses" className="mb-20">
                    <PopularClasses />
                </section>
                <section id="popular-courses" className="mb-20">
                    <div className="container mx-auto" data-aos="fade-up">

                        <h2 className=' text-4xl mb-20 text-red-600 font-bold'>

                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Popular Classes . . .')
                                        .callFunction(() => {
                                        })
                                        // .pauseFor(2500)
                                        // .deleteAll()
                                        // .callFunction(() => {
                                        //     console.log('All strings were deleted');
                                        // })
                                        .start();
                                }}
                            />
                        </h2>

                        <PopularInstructors />

                    </div>
                </section>


                <Outlet></Outlet>

            </main>
            <Footer />
        </div>
    );
};

export default Home;