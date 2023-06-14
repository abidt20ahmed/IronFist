import { useState } from "react";
import { toast } from "react-toastify";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const CheckoutForm = ({ selected }) => {
    const { user } = useAuth()
    const date = new Date();
    const { _id, className, classImage, instructorImage, instructorName, email, title, price, enrolled, description, selectedId } = selected;
    const data = { classId: selectedId, enrolledId: _id, email: user.email, className, classImage, instructorImage, instructorName, instructorEmail: email, title, price, enrolled, description, date };


    // !


    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [isCardNumberComplete, setIsCardNumberComplete] = useState(false);
    const navigate = useNavigate()
    const handleCardChange = (event) => {
        if (event.error) {
            setPaymentError(event.error.message);
        } else {
            setPaymentError(null);
        }
        setIsCardNumberComplete(event.complete);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {


            // !

            fetch(`${import.meta.env.VITE_API_URL}/postEnrolled`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {

                    toast('Successfully Purchased')
                    navigate('/dashboard/myEnrolledClasses')

                })
                .catch(error => {
                    console.log('Error:', error);
                });

            // ?
            // fetch(`${import.meta.env.VITE_API_URL}/selected/${_id}`, {
            //     method: 'DELETE'
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data);
            //         if (data.deletedCount > 0) {
            //             toast('Successfully deleted')
            //         }

            //         const left = classes.filter(classData => classData._id !== id);
            //         // setClasses(left)

            //     })

            // *



            // fetch(`${import.meta.env.VITE_API_URL}/postClass`, {
            //     method: 'PATCH',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(enrolledClasses)
            // })
            //     .then(res => {
            //         if (!res.ok) {
            //             throw new Error('Failed to update enrolled classes');
            //         }
            //         return res.json();
            //     })
            //     .then(result => {
            //         console.log(result);
            //         navigate('/dashboard/myEnrolledClasses');
            //     })
            //     .catch(error => {
            //         console.error('Error:', error);
            //     });


            // !
            setPaymentSuccess('Payment Successful!');
            setPaymentError(null);
        }
    };



    return (
        <div>
            <form className="lg:w-1/3 m-8 mt-60 checkout-form mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    className=" border rounded-md p-3"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                    onChange={handleCardChange}
                />
                <button className=" mt-4 px-4 py-1 text-gray-100 dark:text-gray-300 rounded-md bg-blue-500 dark:bg-gray-500 disabled:bg-gray-300" type="submit" disabled={!stripe || !isCardNumberComplete}>
                    Pay
                </button>
            </form>
            {paymentError && <div className=" text-center text-red-600">{paymentError}</div>}
            {paymentSuccess && <div className=" text-center text-green-400">{paymentSuccess}</div>}

        </div>

    );
};

export default CheckoutForm;







// // import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect } from "react";
// import { useState } from "react";
// // import './Checkout.css'
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAuth from "../../hooks/useAuth";
// import { toast } from "react-toastify";
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


// const CheckoutForm = ({ selected }) => {

//     const { _id, className, classImage, instructorImage, instructorName, email, title, price, enrolled, description } = selected;
//     const data = { enrolledId: _id, className, classImage, instructorImage, instructorName, email, title, price, enrolled, description };


//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         fetch(`${import.meta.env.VITE_API_URL}/postEnrolled`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 console.log(result);
//                 toast('Successfully Purchased')


//             })
//             .catch(error => {
//                 console.log('Error:', error);
//             });


//     }





//     return (
//         <>
//             <form className="lg:w-1/3 m-8 my-60 checkout-form mx-auto" onSubmit={handleSubmit}>
//                 <CardElement
//                     className=" border rounded-md p-3"
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                     onChange={handleCardChange}
//                 />
//                 <button className=" mt-4 px-4 py-1 text-gray-100 dark:text-gray-300 rounded-md bg-blue-500 dark:bg-gray-500 disabled:bg-gray-300" type="submit">
//                     Pay
//                 </button>
//             </form>

//         </>
//     );
// };

// export default CheckoutForm;