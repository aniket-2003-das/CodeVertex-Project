import React from 'react'

function AdminDashboard() {
  return (
    <>
        <aside className="w-64 bg-gray-900 h-screen fixed text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-8">Dashboard</h1>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>📊</span>
                <span>DASHBOARD</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>📘</span>
                <span>MY COURSE</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>➕</span>
                <span>ADD COURSE</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>👤</span>
                <span>MY PROFILE</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>⚙️</span>
                <span>SETTINGS</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>🚪</span>
                <span>LOGOUT</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>👥</span>
                <span>STUDENT DETAILS</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default AdminDashboard
