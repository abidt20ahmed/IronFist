import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Login from '../../authentication/Login';
import Register from '../../authentication/Register';

const Home = () => {
    return (
        <>
            <NavBar />
            <Login></Login>
            <Register></Register>
            <Footer />
        </>
    );
};

export default Home;