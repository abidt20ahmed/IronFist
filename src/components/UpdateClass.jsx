import { Dialog, Transition } from '@headlessui/react'
import { Label } from 'flowbite-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { toast } from 'react-toastify';


const UpdateClass = ({ open, closeClassUpdate, feedbackId }) => {

    const [clas, setClas] = useState([])


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/classes/${feedbackId}`)
            .then(res => res.json())
            .then(data => {
                setClas(data)
            })
    }, [feedbackId, open])

    const handleUpdate = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const seats = form.seats.value;
        const classImage = form.classPhoto?.value;
        // const instructorPhoto = form.instructorPhoto?.value;
        const category = form.category.value;
        const description = form.description.value;
        const lastDate = new Date();
        const data = {
            className: name,
            classImage,
            category,
            seats,
            description,
            lastDate,
            // instructorPhoto,

        }







        fetch(`${import.meta.env.VITE_API_URL}/updateClass/${feedbackId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast('Feedback Sent')
                }
            })
        closeClassUpdate()
    }

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => temp(null)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">




                                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update product</h2>
                                    <form onSubmit={handleUpdate}>
                                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                            <div className="sm:col-span-2">
                                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Image</label>
                                                <input type="text" name="classPhoto" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={clas?.classImage} placeholder="Image Url" required="" />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Name</label>
                                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={clas?.className} placeholder="Class name" required="" />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={clas?.price} placeholder="$299" required="" />
                                            </div>
                                            <div>
                                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                                {/* <Label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</Label> */}
                                                <input type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={clas?.category} placeholder="Karate Kicks" required />
                                                {/* <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                    <option defaultValue="">Electronics</option>
                                                    <option value="TV">TV/Monitors</option>
                                                    <option value="PC">PC</option>
                                                    <option value="GA">Gaming/Console</option>
                                                    <option value="PH">Phones</option>
                                                </select> */}
                                            </div>
                                            <div>
                                                <label htmlFor="seats" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seats</label>
                                                <input type="number" name="seats" id="seats" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={clas?.seats} placeholder="Available Seats" required="" />
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                                <textarea id="description" rows="5" defaultValue={clas?.description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                                            </div>
                                            {/* <div className="sm:col-span-2">
                                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                                <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a product description here...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                                            </div> */}
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                                Update
                                            </button>

                                        </div>
                                    </form>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default UpdateClass;