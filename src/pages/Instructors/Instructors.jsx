import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Instractor from '../../components/Instractor';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-reveal';
import Zoom from 'react-reveal/Zoom';


const Instructors = () => {
    const instructors = useLoaderData();

    const sectionStyle = {
        backgroundImage: "url('https://img.freepik.com/free-photo/full-shot-teen-practicing-taekwondo_23-2150260460.jpg?w=1380&t=st=1686340904~exp=1686341504~hmac=caffbf0e86f387aa8ab2de599edf803746e4319db39c1b3c1b81fee9e949cb10')",
        backgroundPosition: "top",
        backgroundAttachment: 'fixed',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#606060",
        marginTop: "60px",
        // borderRadius: "20px",

    };

    return (
        <>
            <NavBar />


            <section style={sectionStyle}>
                <div className="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
                    <div className="text-center lg:text-left">
                        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-" style={{ lineHeight: "1.2" }}>

                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(' Discover Our <br/> Highly Skilled Instructors')
                                        .callFunction(() => {
                                            // console.log('String typed out!');
                                        })
                                        // .pauseFor(2500)
                                        // .deleteAll()
                                        // .callFunction(() => {
                                        //     console.log('All strings were deleted');
                                        // })
                                        .start();
                                }}
                            />

                        </h1>
                        <p className="mb-8 text-lg font-semibold text-gray-300 lg:text-2xl">
                            Meet Our Skilled Instructors Empowering You with Self-Defense Techniques.
                        </p>
                    </div>
                </div>
            </section>

            <Zoom bottom>  <h2 className=' text-center mt-20 text-5xl font-bold text-red-600'>Instructors</h2></Zoom>

            <Zoom> <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto my-20" data-aos="zoom-in" data-aos-delay="100">
                {
                    instructors.map(instructor => <Instractor key={instructor._id} instructor={instructor} />)
                }
            </div></Zoom>


            <Footer />
        </>
    );
};

export default Instructors;