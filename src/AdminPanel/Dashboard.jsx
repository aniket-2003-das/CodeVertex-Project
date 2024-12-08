import React from 'react'
import AdminDashboard from './AdminDashboard'

function Dashboard() {
    return (
        <>
            <div className="flex h-full bg-gradient-to-b from-black via-blue-950 to-gray-900 text-white">

                <AdminDashboard />

                <main className="flex-1 p-8 bg-gray-800 ">
                    <h1 className="text-2xl font-bold mb-4">Hii ADMIN!!</h1>
                    <p className="mb-8 text-sm">Let's start something new</p>
                   
                    <div className="bg-gray-700 p-8 rounded w-[70%] h-60 place-content-center text-center mx-auto my-auto ">
                        <p>You have not created any courses yet</p>
                        <a href="#" className="text-orange-400 mt-4 block hover:underline">Create a course</a>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Dashboard
