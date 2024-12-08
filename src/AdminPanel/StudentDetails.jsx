import React from 'react'
import AdminDashboard from './AdminDashboard'

function StudentDetails() {
    return (
        <>
            <div className='h-screen flex text-white bg-gradient-to-b from-black via-blue-950 to-gray-900'>
                <AdminDashboard />

                <main className='ml-72 w-[100%]'>
                    <div className='flex w-[100%] mt-4  '>
                        <h1 className='text-yellow-500'>Student's Details</h1>
                    </div>
                    <div className='w=[100%] text-end mr-6'>
                        <button className='bg-gray-800 px-4 py-2 rounded-md text-orange-400 mb-8'>+ Add Students</button>
                    </div>

                    <div className='overflow-x-auto mx-6'>
                        <table className='min-w-full text-white rounded-lg'>
                            <thead className='bg-gradient-to-r from-black via-blue-950 to-indigo-900 border-b-2 border-white'>
                                <tr>
                                    <th className='py-2 px-4 border-b'>Name</th>
                                    <th className='py-2 px-4 border-b'>Email</th>
                                    <th className='py-2 px-4 border-b'>Contact</th>
                                </tr>
                            </thead>
                            <tbody className='text-center '>
                              {/* when backend is connect then data should be display using loops  */}
                                <tr>
                                    <td className='py-2 px-4 bg-transparent'>Student1</td>
                                    <td className='py-2 px-4 bg-transparent border-l-2 border-white'>student1@example.com</td>
                                    <td className='py-2 px-4 bg-transparent border-l-2 border-white'>123-456-7890</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-4 bg-transparent'>student2</td>
                                    <td className='py-2 px-4 bg-transparent border-l-2 border-white'>student2@example.com</td>
                                    <td className='py-2 px-4 bg-transparent border-l-2 border-white'>123-456-7890</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    )
}

export default StudentDetails
