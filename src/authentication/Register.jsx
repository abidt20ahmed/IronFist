import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider';
import app from '../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import RoleModal from '../components/RoleModal';


const Register = () => {
    const { createUser, logOut, role, user } = useContext(AuthContext)
    const email = user?.email;

    // const data = {
    //     role: role,
    //     email
    // };
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const [password, setPassword] = useState('password')
    const [confirm, setConfirm] = useState('password')
    const [errorText, setErrorText] = useState('')
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    let [isOpen, setIsOpen] = useState(true)
    // console.log(role);
    const classes = useLoaderData()

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }



    const handlePassword = (type) => {
        setPassword(type)
    }
    const handleConfirm = (type) => {
        setConfirm(type)
    }


    const addStudent = (email, picture, name) => {
        const data = {
            role: 'Student',
            email,
            picture,
            name
        };
        fetch(`${import.meta.env.VITE_API_URL}/postRoles/${email}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(result => {
                        // console.log(result);
                        navigate('/classes')
                        toast('Toy Posted Successfully')
                    })
                    .catch(error => {
                        console.log('Error:', error);
                    });
    }


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/role/email/${email}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            });
    }, [])

    const handleGoogleSignin = () => {
        // console.log(role);
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                toast('Signed in successfully')
                // console.log(user.email);
                addStudent(user.email, user.photoURL, user.displayName)
                navigate(from, { replace: true })
                // setIsOpen(true)

                // console.log(user.photoURL);

            })
            .catch(error => {
                toast(`${error.message}`)
                console.log(error);
            })
    }


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user
                toast('successfully registered. Login now!')
                addStudent(createdUser.email)
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.modifiedCount > 0) {                         
                            // navigate('/classes')
                        }

                    })
                // setIsOpen(true)
                logOut()
                navigate('/login')
            })
            .catch(error => {
                console.log(`${error.message}`)
            })


        await updateProfile(auth.currentUser, {
            displayName: data.name, photoURL: data.photo
        }).then(() => {
            // Profile updated!
            // console.log('Profile updated!');
        }).catch((error) => {
            // An error occurred
            // console.log(error);
        });
    };

    useEffect(() => {
        setErrorText(errors.password?.type)
    }, [errors, errorText])

    return (
        <>
            <NavBar />

            {/* <RoleModal isOpen={isOpen} closeModal={closeModal} /> */}
            {/* <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div> */}


            <form onSubmit={handleSubmit(onSubmit)} className="flex px-10 md:px-20 flex-col gap-4 my-24 rounded-xl max-w-screen-sm mx-auto bg-slate-100 mt-40 py-10">
                <h1 className=" text-4xl font-bold text-center pb-10 text-red-600">Register</h1>

                <button onClick={handleGoogleSignin} className='border border-[#D01F26] w-ful py-2 rounded-lg flex justify-center gap-3'>
                    <FcGoogle className=' text-blue-600 w-8 h-8 rounded-full py-0'></FcGoogle>Sign up with Google
                </button>


                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name2"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name2"
                        type="text"
                        name='name'
                        {...register("name", { required: true, maxLength: 80 })}
                        placeholder="Your Name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        name='email'
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        placeholder="Your Email"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <div className=' relative'>
                        <TextInput
                            id="password2"
                            type={password}
                            name='pass'
                            {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                            })}
                            placeholder='******'
                            required={true}
                            shadow={true}
                        />
                        <FaEye onClick={() => handlePassword('text')} type="button" className={`absolute text-2xl text-gray-500  dark:text-white top-1/4 right-3 ${password === 'password' ? 'block' : 'hidden'}`} />
                        <FaEyeSlash onClick={() => handlePassword('password')} type="button" className={`absolute text-2xl text-gray-500  dark:text-white top-1/4 right-3 ${password === 'password' ? 'hidden' : 'block'}`} />
                    </div>
                </div>
                {!errorText && <small>Please create a strong and secure password with a combination of uppercase and lowercase letters, numbers, and special characters.</small>}
                {errorText === 'minLength' && <small className=' text-red-500'>Use at least 8 characters</small>}
                {errorText === 'pattern' && <small className=' text-red-500'>Use at least one uppercase one lowercase, one number and one symbol.</small>}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Confirm password"
                        />
                    </div>
                    <div className=' relative'>
                        <TextInput
                            id="password2"
                            type={confirm}
                            name='confirm'
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            })}
                            placeholder='******'
                            required={true}
                            shadow={true}
                        />
                        {errors.confirmPassword && (
                            <span className=" text-red-500">{errors.confirmPassword.message}</span>
                        )}
                        <FaEye onClick={() => handleConfirm('text')} className={`absolute text-2xl text-gray-500  dark:text-white top-1/4 right-3 ${confirm === 'password' ? 'block' : 'hidden'}`} />
                        <FaEyeSlash onClick={() => handleConfirm('password')} className={`absolute text-2xl text-gray-500  dark:text-white top-2 right-3 ${confirm === 'password' ? 'hidden' : 'block'}`} />
                    </div>
                </div>
                {errorText && <small>Confirm password</small>}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo-url"
                            value="Photo Url"
                        />
                    </div>
                    <TextInput
                        id="photo-url"
                        type="text"
                        name='photo'
                        {...register("photo", {
                            required: true,
                            pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                        })}
                        placeholder='Photo Url'
                        shadow={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" required />
                    <Label htmlFor="agree">
                        I agree with the
                        <a
                            href="#"
                            className="ml-2 text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button className='bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800' type="submit">
                    Register new account
                </Button>

                <small className='font-semibold'>Already have an account? <Link className=' text-blue-600 hover:underline dark:text-blue-500 font-semibold' to={'/login'}>Login</Link></small>
            </form>
            <Footer />
        </>
    );
};

export default Register;