"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import { IndianRupee, LayoutDashboard, ShieldCheck, Wallet } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

function SideNav() {
    const menuList=[
        {
          id: 1,
          name: 'Dashboard',
          icon: LayoutDashboard,
          path: '/dashboard'
        },
        {
          id: 2,
          name: 'Budget',
          icon: IndianRupee,
          path: '/dashboard/budget'

        },
        {
          id: 3,
          name: 'Expenses',
          icon: Wallet,
          path: '/dashboard/expenses'
        },
        {
          id: 4,
          name: 'Upgrade',
          icon: ShieldCheck,
          path: '/dashboard/upgrade'
        }
    ]
    const path = usePathname();

    useEffect(()=> {
      console.log(path)
    },[path])
  return (
    <div className='h-screen p-5 border shadow-sm'>
        <Image src={'/logo.svg'}
        alt='logo'
        width={100}
        height={60}/>
        <div>
          {menuList.map((menu)=>(
            <Link key={menu.id} href={menu.path}>
            <h2 className={`flex gap-2 items-center mb-2 text-blue-700 font-medium p-5 cursor-pointer rounded-md hover:text-green-500 hover:bg-blue-100 ${path == menu.path && 'text-blue-700 bg-blue-100'}`}>
              <menu.icon/>
              {menu.name}
            </h2>
            </Link>
          ))}
        </div>
        <div className='fixed bottom-10 p-5 flex gap-2 items-center text-blue-700'>
          <UserButton/>
          Profile
        </div>
    </div>
  )
}

export default SideNav