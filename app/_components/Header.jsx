"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useUser, UserButton} from "@clerk/nextjs";
import Link from "next/link";
function Header() {

  const {user, isSignedIn} = useUser();  
  return (
    <div className='p-2 flex justify-between items-center shadow-sm'>
        <Image src={'./logo.svg'} 
          alt='logo'
          width={100}
          height={80}
        />
        {isSignedIn ? <UserButton/> : 
        <Link href = {'/sign-in'}>
        <Button> Let's Start</Button>
        </Link> 
        }
    </div>
  )
}

export default Header