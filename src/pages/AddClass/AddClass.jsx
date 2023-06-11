import { Button, Label } from 'flowbite-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import NavBar from '../../components/NavBar';
import useAuth from '../../hooks/useAuth';
import Footer from '../../components/Footer';

const AddClass = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    useTitle('AddClass')
    const instructorName = user?.displayName;
    const email = user?.email;

    console.log(user);

    const handleAddClass = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const seats = form.seats.value;
        const facebook = form.facebook.value;
        const instagram = form.instagram.value;
        const twitter = form.twitter.value;
        const classPhoto = form.classPhoto?.value;
        const instructorPhoto = form.instructorPhoto?.value;
        const category = form.category.value;
        const linkedIn = form.linkedIn.value;
        const description = form.description.value;
        const date = new Date();
        const instructorName = user?.displayName;
        const instructorImage = user?.displayName;
        console.log(instructorName);
        const email = user?.email;
        const data = {
            className: name,
            facebook,
            instagram,
            twitter,
            classPhoto,
            category,
            seats,
            linkedIn,
            description,
            date,
            status: 'Pending',
            instructorName,
            instructorImage,
            instructorPhoto,
            email


        }
        console.log(data);

        fetch('http://localhost:5000/postClass', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate('/classes')
                toast('Toy Posted Successfully')
            })
            .catch(error => {
                console.log('Error:', error);
            });



    }


    return (


        <>
            {/* <NavBar></NavBar> */}


            <section className="bg-slte-100 dark:bg-gray-900 my-10">
                <div className="py-8 px-10 mx-auto max-w-5xl lg:py-16 bg-slate-100 dark:bg-slate-800 rounded-xl">
                    {/* <h2 className=' text-center text-red-500 mb-10 text-5xl font-bold'>Add Class</h2> */}
                    <h2 className="mb-10 text-xl font-bold text-gray-900 dark:text-white">Add a new class</h2>
                    <form className='' onSubmit={handleAddClass}>
                        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                            <div className="sm:col-span-3">
                                <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Name</Label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Class name" required />
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="classPhoto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Image</Label>
                                <input type="text" name="classPhoto" id="classPhoto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Class Image Url" required />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="instructorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</Label>
                                <input type="text" name="instructorName" id="instructorName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={instructorName} readOnly required />
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="instructorPhoto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Image</Label>
                                <input type="text" name="instructorPhoto" id="instructorPhoto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Image Url" required />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</Label>
                                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={email} readOnly required />
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</Label>
                                <input type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Category" required />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</Label>
                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Price" required />
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="seats" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available Seats</Label>
                                <input type="number" name="seats" id="seats" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Available Seats" required />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="instagram" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram</Label>
                                <input type="text" name="instagram" id="instagram" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Instagram Profile" />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="twitter" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Twitter</Label>
                                <input type="text" name="twitter" id="twitter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Twitter Profile" />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="facebook" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</Label>
                                <input type="text" name="facebook" id="facebook" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Facebook Profile" />
                            </div>
                            <div>
                                <Label htmlFor="linkedIn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LinkedIn</Label>
                                <input type="text" name="linkedIn" id="linkedIn" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="LinkedIn Profile" />
                            </div>
                            <div className="sm:col-span-3">
                                <Label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</Label>
                                <textarea id="description" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Class description here"></textarea>
                            </div>
                            <button type="submit" className=" text-white text-lg font-semibold bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 py-3 rounded-md">
                                Add Now
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {/* <Footer></Footer> */}
        </>
    );
};

export default AddClass;