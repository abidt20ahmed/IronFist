import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../context/AuthProvider';
import app from '../firebase/firebase.config';


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)
    const [password, setPassword] = useState('password')
    if (password) {

        console.log(password);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    console.log(from);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                toast('Signed in Successfully')
                navigate(from, { replace: true })

            })
            .catch(error => {
                toast(error.message)
            })

    }


    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                toast('Signed in successfully')
                // navigate(from, { replace: true })

                console.log(result.user.photoURL);

            })
            .catch(error => {
                toast(`${error.message}`)
            })
    }

    const handlePassword = (type) => {
        console.log(type);
        setPassword(type)
    }

    return (

        <>
            <form onSubmit={handleLogin} className="flex px-10 md:px-20 flex-col gap-4 mt-40 rounded-lg max-w-[500px] mx-auto bg-slate-200 pt-10 py-10">
                <h1 className=" text-4xl font-bold text-center pb-10 text-red-600">Login</h1>
                <div className='flex justify-between items-center my-5 gap-10'>

                    <button onClick={handleGoogleSignin} className='border border-[#D01F26] w-full py-2 rounded-lg flex justify-center gap-3'>
                        <FaGoogle className=' text-blue-600 mx-aut w-6 h-6 rounded-full py-0'></FaGoogle>Google
                    </button>
                    <button onClick={handleGoogleSignin} className='border border-[#D01F26] w-full py-2 rounded-lg flex justify-center gap-3'>
                        <FaGoogle className=' text-blue-600 mx-aut w-6 h-6 rounded-full py-0'></FaGoogle>Google
                    </button>


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
                        placeholder="Email"
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
                            name='password'
                            placeholder='******'
                            required={true}
                            shadow={true}
                        />
                        <FaEye onClick={() => handlePassword('text')} className={`absolute text-2xl top-1/4 right-3 ${password === 'password' ? 'block' : 'hidden'}`} />
                        <FaEyeSlash onClick={() => handlePassword('password')} className={`absolute text-2xl top-1/4 right-3 ${password === 'password' ? 'hidden' : 'block'}`} />
                    </div>

                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="agree" required={true} />
                    <Label htmlFor="agree">
                        I agree with the
                        <a
                            href="/forms"
                            className="ml-2 text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button className='bg-[#D01F26] hover:bg-[#AC2424]' type="submit">
                    Login
                </Button>

                <small className='font-semibold text-center mt-5'>Not registered yet? <Link className=" text-blue-600 hover:underline dark:text-blue-500 font-semibold" to={'/register'}>Register</Link></small>
            </form>
        </>
    );
};

export default Login;