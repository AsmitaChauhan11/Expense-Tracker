import React from 'react'
import SideNav from './SideNav'
import { UserButton } from '@clerk/nextjs'

const DashboardHeader = () => {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>
            <input 
                type="text" 
                placeholder="Search..." 
                className="px-4 py-2 border rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <div>
            <UserButton/>
        </div>
    </div>
  )
}

export default DashboardHeader