/* eslint-disable react/no-unescaped-entities */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const selected = useLoaderData()


    return (
        <div className='p-4 sm:ml-64'>
            <div className=' text-center'>

                <h1 className="text-5xl font-extrabold text-red-600 dark:text-white">Iron Fist<small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">Let's move on your awesome journey...</small></h1>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm selected={selected} />
            </Elements>

        </div>
    );
};

export default Payment;