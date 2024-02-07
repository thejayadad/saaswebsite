'use client'
import ThemeToggle from '@/components/Buttons/ThemeToggle'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LogoutButton from '@/components/Buttons/LogoutButton'
import Logo from '@/components/Logo'

const Navbar = () => {
    const session = useSession()
    const router = useRouter()
    if(!session){
        router.push("/")
    }
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between mx-auto max-w-screen-lg items-center'>
            <Link href={'/dashboard'}>
                <Logo height={100} width={100} />
            </Link>
            <div className='flex items-center gap-2'>
                <ThemeToggle />
                <LogoutButton />
            </div>
        </nav>
    </header>
  )
}

export default Navbar