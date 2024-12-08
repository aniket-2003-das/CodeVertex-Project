import React from 'react';
import AdminDashboard from './AdminDashboard';

function AddCourse() {
    return (
        <div className='flex text-white h-full bg-gradient-to-b from-black via-blue-950 to-gray-900'>
            <AdminDashboard />

            <main className='w-full ml-64 p-8'>
                <h2 className='font-bold text-2xl text-orange-500 mb-8'>Add Course</h2>

                <form action='' method='' className='w-full'>
                    {/* Course Name */}
                    <div className='w-full mb-6'>
                        <label htmlFor="CourseName" className='block w-full mb-2'>
                            Course Title <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type="text"
                            id="CourseName"
                            name="CourseName"
                            placeholder="Enter Course Title"
                            className='w-full pl-4 py-2 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>

                    {/* Course Description */}
                    <div className='w-full mb-6'>
                        <label htmlFor="CourseDescription" className='block w-full mb-2'>
                            Course Description <span className='text-red-600'>*</span>
                        </label>
                        <textarea
                            id="CourseDescription"
                            name="CourseDescription"
                            placeholder="Description"
                            className='w-full p-4 h-32 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2 resize-none'
                        />
                    </div>

                    {/* Course Price */}
                    <div className='w-full mb-6'>
                        <label htmlFor="price" className='block w-full mb-2'>
                            Course Price <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            id="price"
                            name="price"
                            placeholder="Enter Course Price"
                            className='w-full py-2 pl-4 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>

                    {/* Course Category */}
                    <div className='w-full mb-6'>
                        <label htmlFor="courseContent" className='block w-full mb-2'>
                            Course Category <span className='text-red-600'>*</span>
                        </label>
                        <select
                            name="courseContent"
                            id="courseContent"
                            className='w-full py-2 pl-4 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'>
                            <option value="webDevelopment" className='bg-gray-900'>Web Development</option>
                            <option value="AppDevelopment" className='bg-gray-900'>App Development</option>
                            <option value="AiAndMl" className='bg-gray-900'>AI and Ml</option>
                            <option value="softwareDevelopment" className='bg-gray-900'>Software Development</option>
                        </select>
                    </div>

                    {/* Tags */}
                    <div className='w-full mb-6'>
                        <label htmlFor="Tag" className='block w-full mb-2'>
                            Tags<span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            id="Tag"
                            name="Tag"
                            placeholder="Enter Tag and Press Enter"
                            className='w-full py-2 pl-4 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>

                    {/* Thumbnail */}
                    <div className='w-full mb-6'>
                        <label htmlFor="thumbnail" className='block w-full mb-2'>
                            Thumbnail<span className='text-red-600'>*</span>
                        </label>
                        <div className="place-content-center text-center bg-gradient-to-r from-indigo-950 via-indigo-900 to-gray-800 p-8 rounded-md border border-dashed border-gray-500">
                            <div className="p-5">
                                <span className='text-2xl'>🗃️</span>
                            </div>
                            <label htmlFor="thumbnail" className="cursor-pointer">
                                <input type="file" id="thumbnail" name="thumbnail" className="hidden" />
                                <span className="text-blue-300">Drag and Drop an Image or </span>
                                <span className="text-orange-500">Click to Browse</span>
                            </label>
                            <div className="mt-2 flex place-content-center">
                                <p className="text-sm m-2">Aspect ratio 16:9</p>
                                <p className="text-sm m-2">Recommended size 1024*576</p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits of course */}
                    <div className='w-full mb-6'>
                        <label htmlFor="WhatYouWillLearn" className='block w-full mb-2'>
                            Benefits of Course <span className='text-red-600'>*</span>
                        </label>
                        <textarea
                            id="WhatYouWillLearn"
                            name="WhatYouWillLearn"
                            placeholder="Description"
                            className='w-full p-4 h-32 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2 resize-none'
                        />
                    </div>

                    {/* Requirement and instruction */}
                    <div className='w-full mb-6'>
                        <label htmlFor="Requirements" className='block w-full mb-2'>
                            Requirement/Instruction <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type="text"
                            id="Requirements"
                            name="Requirements"
                            placeholder="Requirements"
                            className='w-full pl-4 py-2 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>

                    <button className='bg-transparent text-orange-600 font-bold text-lg '>Add</button>
                    <div className='flex place-content-end mr-10'>
                        <button className='bg-yellow-700 text-black px-4 py-2 rounded-md'>Next</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default AddCourse;
