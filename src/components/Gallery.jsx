import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
// import Aos from 'aos';
// import 'aos/dist/aos.css'

const Gallery = () => {
    const [picture1, setPicture1] = useState('https://img.freepik.com/free-photo/karate-fighters_654080-1934.jpg?w=1380&t=st=1687124890~exp=1687125490~hmac=c2eeb9c436d64b0ef73ec57cd53fbfca65306143fd40628f28378ad39cd16eb6')
    const [picture2, setPicture2] = useState('https://img.freepik.com/free-photo/karate-fighters-tatami-fighting-championship_654080-1918.jpg?w=1380&t=st=1687124988~exp=1687125588~hmac=b10cb0a2486f68afecd14a10f4749db60cef8b21712b1d59f956d057aa4939d1')
    // useEffect(() => {
    //     Aos.init();
    // }, [])


    return (

        <div className="grid gap-4 w-full max-w-7xl mx-auto mb-20">

            <div className="grid grid-cols-2 gap-4">

                <Fade left><img className="h-auto max-w-full rounded-lg" src={picture1} alt="" /></Fade>


                <Fade right><img className="h-auto max-w-full rounded-lg" src={picture2} alt="" /></Fade>

            </div>


            {/* <div>
                <img className="h-auto w-full rounded-lg" src={picture} alt="" />
            </div> */}
            <Fade bottom>   <div className="grid grid-cols-5 gap-4" data-aos="fade-up" data-aos-duration="2000">
                <div onMouseOver={() => setPicture1('https://img.freepik.com/free-photo/silhouette-sportive-man-training-karate-field-sunrise_176420-5212.jpg?w=1380&t=st=1687125081~exp=1687125681~hmac=8caac63da7d1442b4cf319e0a5194fedfda1741973192800a383143b49c82fc6')} data-aos="fade-up" data-aos-duration="3000">
                    <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/silhouette-sportive-man-training-karate-field-sunrise_176420-5212.jpg?w=1380&t=st=1687125081~exp=1687125681~hmac=8caac63da7d1442b4cf319e0a5194fedfda1741973192800a383143b49c82fc6" alt="" />
                </div>
                <div onMouseOver={() => setPicture2('https://img.freepik.com/free-photo/karate-fighters-tatami-fighting-championship_654080-1910.jpg?w=1380&t=st=1687125139~exp=1687125739~hmac=f697c47b3e6e66de150cc687c629c6447e91614670c61cae8700f445b2009df1')} data-aos="fade-up" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/karate-fighters-tatami-fighting-championship_654080-1910.jpg?w=1380&t=st=1687125139~exp=1687125739~hmac=f697c47b3e6e66de150cc687c629c6447e91614670c61cae8700f445b2009df1" alt="" />
                </div>
                <div onMouseOver={() => setPicture1('https://img.freepik.com/free-photo/two-boys-fighting-aikido-training-martial-arts-school-healthy-lifestyle-sports-concept_155003-9471.jpg?w=1380&t=st=1687125451~exp=1687126051~hmac=0f4ed063ef785ec90f55caf228596ab43bf48399be8ea24cc217ab03a0eb4f60')} data-aos="fade-up" data-aos-duration="3000">
                    <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/two-boys-fighting-aikido-training-martial-arts-school-healthy-lifestyle-sports-concept_155003-9471.jpg?w=1380&t=st=1687125451~exp=1687126051~hmac=0f4ed063ef785ec90f55caf228596ab43bf48399be8ea24cc217ab03a0eb4f60" alt="" />
                </div>
                <div onMouseOver={() => setPicture2('https://img.freepik.com/free-photo/group-boys-girl-fighting-aikido-training-martial-arts-school-healthy-lifestyle-sports-concept_155003-8636.jpg?w=1380&t=st=1687125342~exp=1687125942~hmac=05f9adb75c7c8cc2493c58fcf0813ed273beebb6b9a00ed63e652a0897ef0509')} data-aos="fade-up" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/group-boys-girl-fighting-aikido-training-martial-arts-school-healthy-lifestyle-sports-concept_155003-8636.jpg?w=1380&t=st=1687125342~exp=1687125942~hmac=05f9adb75c7c8cc2493c58fcf0813ed273beebb6b9a00ed63e652a0897ef0509" alt="" />
                </div>
                <div onMouseOver={() => setPicture1('https://img.freepik.com/free-photo/karate-fighters_654080-1940.jpg?w=1380&t=st=1687125558~exp=1687126158~hmac=3da1a5a8289c10b372495ba7e0d0fde49898e1e2e05bcac84d2fbbbe68f8b18a')} data-aos="fade-up" data-aos-duration="3000">
                    <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/karate-fighters_654080-1940.jpg?w=1380&t=st=1687125558~exp=1687126158~hmac=3da1a5a8289c10b372495ba7e0d0fde49898e1e2e05bcac84d2fbbbe68f8b18a" alt="" />
                </div>
            </div></Fade>
        </div>





    );
};

export default Gallery;



