import React from 'react'
import AdminDashboard from './AdminDashboard'


function AddStudent() {
  return (
    <>
       <div className='flex text-white h-screen bg-gradient-to-b from-black via-blue-950 to-gray-900'>
                <AdminDashboard />

                <form action='' method='' className='w-full m-6 ml-72'>
                    {/* Student Name */}
                    <div className='w-full mb-6'>
                        <label htmlFor='Name' className='font-semibold text-xl mb-8 italic'>Student's Name</label>
                        <input
                            type="text"
                            id="Name"
                            name="Name"
                            placeholder="Name of the Student"
                            className='w-full pl-4 py-2 my-4 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>

                    {/* Students Email Id */}
                    <div className='w-full mb-6'>
                        <label htmlFor='Email' className='font-semibold text-xl mb-8 italic'>Student's Email Id</label>
                        <input
                            type="email"
                            id="Email"
                            name="Email"
                            placeholder="Enter the Email of Student"
                            className='w-full pl-4 py-2 my-4 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>

                    {/* contact number */}
                    <div className='w-full mb-6'>
                        <label htmlFor='contactNumber' className='font-semibold text-xl mb-8 italic'>Student's Email Id</label>
                        <input
                            type="number"
                            id="contactNumber"
                            name="contactNumber"
                            placeholder="Enter the Email of Student"
                            className='w-full pl-4 py-2 my-4 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>

                    {/* course chosen */}
                    <div className='w-full mb-6'>
                        <label htmlFor="courseName" className='block w-full mb-2 text-lg font-semibold italic'>
                            Course Chosen <span className='text-red-600'>*</span>
                        </label>
                        <select
                            name="courseName"
                            id="courseName"
                            className='w-full py-2 pl-4 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'>
                           <option value="webDevelopment" className='bg-gray-900'>Web Development</option>
                            <option value="AppDevelopment" className='bg-gray-900'>App Development</option>
                            <option value="AiAndMl" className='bg-gray-900'>AI and Ml</option>
                            <option value="softwareDevelopment" className='bg-gray-900'>Software Development</option>
                        </select>
                    </div>

                {/* Progress */}
                <div className='w-full mb-6'>
                        <label htmlFor='Name' className='font-semibold text-xl mb-8 italic'>Progress</label>
                        <input
                            type="text"
                            id="Name"
                            name="Name"
                            placeholder="Check the Progress"
                            className='w-full pl-4 py-2 my-4 border bg-gradient-to-r from-blue-950 via-blue-900 to-gray-800 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>

                    <div className='text-center'>
                        <button className='bg-yellow-700 text-black px-4 py-2 rounded-md '>Submit</button>
                    </div>
                </form>
            </div>
    </>
  )
}

export default AddStudent
